import { Formik } from 'formik';
import { FormStyled, Label, Input, Button } from '../Component.styled';

import FormError from '../FormikComponents/errorMessageFormik';
import SelectRelation from '../FormikComponents/selectFormik';
import DateInput from '../FormikComponents/dateInputFormik';
import NotesField from '../FormikComponents/textFieldFormik';
import CheckBox from '../FormikComponents/checkboxFormik';

import { initialValues } from './initialValuesData';
import { validationSchema } from './yup-validation';

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
        <SelectRelation />
        <DateInput />
        <NotesField />
        <CheckBox />
        <Button type="submit">Add contact</Button>
      </FormStyled>
    </Formik>
  );
};

export default ContactForm;
