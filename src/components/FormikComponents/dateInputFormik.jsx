import FormError from '../FormikComponents/errorMessageFormik';
import { Label, Input } from '../Component.styled';

const DateInput = () => {
  return (
    <div>
      <Label htmlFor="birthDate">Date of birthday</Label>
      <div>
        <Input name="birthDate" type="date" placeholder="Date of birthday" />
        <FormError name="birthDate" />
      </div>
    </div>
  );
};
export default DateInput;
