import { Field } from 'formik';
import FormError from '../FormikComponents/errorMessageFormik';
import { relations } from '../ContactForm/relations';
import { Label } from '../Component.styled';

const SelectRelation = () => {
  return (
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
  );
};
export default SelectRelation;
