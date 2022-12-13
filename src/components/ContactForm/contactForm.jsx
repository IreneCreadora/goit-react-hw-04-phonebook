import { Formik, Field, ErrorMessage } from 'formik';
import {
  FormStyled,
  Label,
  Input,
  TextArea,
  Button,
  ErrorText,
} from '../Component.styled';

import { relations } from './relations';
import { initialValues } from './initialValuesData';
import { validationSchema } from './yup-validation';

const FormError = ({ name }) => {
  return (
    <ErrorMessage
      name={name}
      render={message => <ErrorText>{message}</ErrorText>}
    />
  );
};

const ContactForm = ({ onSubmit }) => {
  const handleSubmit = (values, { resetForm }) => {
    onSubmit(values);
    resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      <FormStyled autoComplete="off">
        <div>
          <Label htmlFor="name">Full name</Label>
          <div>
            <Input name="name" type="text" placeholder="Full name" />
            <FormError name="name" />
          </div>
        </div>
        <div>
          <Label htmlFor="number">Phone number</Label>
          <div>
            <Input name="number" type="text" placeholder="Phone number" />
            <FormError name="number" />
          </div>
        </div>
        <div>
          <Label htmlFor="relation">Relations</Label>
          <div>
            <Field name="relation" as="select">
              <option value="">Select relations</option>
              {relations.map((relation, idx) => (
                <option value={relation} key={idx}>
                  {relation}
                </option>
              ))}
            </Field>
            <FormError name="relation" />
          </div>
        </div>
        <div>
          <Label htmlFor="birthDate">Date of birthday</Label>
          <div>
            <Input
              name="birthDate"
              type="date"
              placeholder="Date of birthday"
            />
            <FormError name="birthDate" />
          </div>
        </div>
        <div>
          <Label htmlFor="notes">For notes</Label>
          <div>
            <TextArea name="notes" as="textarea" placeholder="For notes" />
            <FormError name="notes" />
          </div>
        </div>
        <div>
          <div>
            <label htmlFor="importantContact">
              <Field name="importantContact" type="checkbox" />
              Mark as important contact
            </label>
          </div>
        </div>
        <Button type="submit">Add contact</Button>
      </FormStyled>
    </Formik>
  );
};

export default ContactForm;
