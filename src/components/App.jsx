import { Component } from 'react';
import { nanoid } from 'nanoid';
import { Layout } from './Layout';

import ContactForm from './ContactForm/contactForm';
import Notification from './Notification/notification';
import ContactList from './ContactList/contactList';
import Filter from './Filter/filter';

import { initialContacts } from './initialContactsData';

import { Container, Phonebook, Contacts, Section } from './Component.styled';

export class App extends Component {
  state = {
    contacts: initialContacts,
    filter: '',
  };

  componentDidMount() {
    const contacts = localStorage.getItem('contacts');
    const parsedContacts = JSON.parse(contacts);

    if (parsedContacts) {
      this.setState({ contacts: parsedContacts });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    const nextContacts = this.state.contacts;
    const prevContacts = prevState.contacts;

    if (nextContacts !== prevContacts) {
      console.log('Обновилось поле todos, записываю todos в хранилище');
      localStorage.setItem('contacts', JSON.stringify(nextContacts));
    }
  }

  handleFilterChange = e => {
    const { name, value } = e.currentTarget;
    this.setState({ [name]: value });
  };

  filteredContacts = () => {
    const filterNormalize = this.state.filter.toLowerCase();

    return this.state.contacts
      .filter(contact => {
        return contact.name.toLowerCase().includes(filterNormalize);
      })
      .sort((a, b) => a.name.localeCompare(b.name));
  };

  formSubmit = values => {
    console.log(values);
    this.setState(prevState => {
      const { contacts } = prevState;
      if (
        contacts.find(
          contact => contact.name.toLowerCase() === values.name.toLowerCase()
        )
      ) {
        alert(`${values.name} is already in contact`);
        return contacts;
      }
      return {
        contacts: [{ id: nanoid(), ...values }, ...contacts],
      };
    });
  };

  contactDelete = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(constact => constact.id !== id),
    }));
  };
  render() {
    const { filter, contacts } = this.state;
    const filteredContacts = this.filteredContacts(filter);
    return (
      <Layout>
        <Container>
          <Phonebook>Phonebook</Phonebook>
          <ContactForm onSubmit={this.formSubmit} />

          <Contacts>Contacts</Contacts>
          {contacts.length === 0 ? (
            <Notification message="Your contact book is empty, add your first contact!" />
          ) : (
            <Section>
              <Filter
                title="Find contact by name"
                onChange={this.handleFilterChange}
                value={filter}
              />
              <ContactList
                filteredContacts={filteredContacts}
                onDelete={this.contactDelete}
              />
            </Section>
          )}
        </Container>
      </Layout>
    );
  }
}
