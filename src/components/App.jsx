import { useState } from 'react';
import { nanoid } from 'nanoid';
import { Layout } from './Layout';

import useLocalStorage from 'hooks/useLocalStorage';

import ContactForm from './ContactForm/contactForm';
import Notification from './Notification/notification';
import ContactList from './ContactList/contactList';
import Filter from './Filter/filter';

import { initialContacts } from './initialContactsData';

import { Container, Phonebook, Contacts, Section } from './Component.styled';

export default function App() {
  const [contacts, setContacts] = useLocalStorage(
    'contactList',
    initialContacts
  );
  const [filter, setFilter] = useState('');

  const handleFilterChange = e => {
    setFilter(e.currentTarget.value);
  };

  const filteredContacts = value => {
    return contacts
      .filter(contact => {
        return contact.name.toLowerCase().includes(value.toLowerCase());
      })
      .sort((a, b) => a.name.localeCompare(b.name));
  };

  const formSubmit = values => {
    console.log(values);
    const isInContact = contacts.find(
      contact => contact.name.toLowerCase() === values.name.toLowerCase()
    );
    if (isInContact) {
      alert(`${values.name} is already in contact`);
      return false;
    }
    const newContact = { id: nanoid(), ...values };

    setContacts(state => [newContact, ...state]);

    return true;
  };

  const contactDelete = id => {
    setContacts(state => state.filter(contact => contact.id !== id));
  };

  return (
    <Layout>
      <Container>
        <Phonebook>Phonebook</Phonebook>
        <ContactForm onSubmit={formSubmit} />

        <Contacts>Contacts</Contacts>
        {contacts.length === 0 ? (
          <Notification message="Your contact book is empty, add your first contact!" />
        ) : (
          <Section>
            <Filter
              title="Find contact by name"
              onChange={handleFilterChange}
              value={filter}
            />
            <ContactList
              filteredContacts={filteredContacts(filter)}
              onDelete={contactDelete}
            />
          </Section>
        )}
      </Container>
    </Layout>
  );
}
