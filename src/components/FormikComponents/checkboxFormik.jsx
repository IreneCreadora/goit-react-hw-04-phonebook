import { Field } from 'formik';

const CheckBox = () => {
  return (
    <div>
      <label htmlFor="importantContact">
        <Field name="importantContact" type="checkbox" />
        Mark as important contact
      </label>
    </div>
  );
};
export default CheckBox;
