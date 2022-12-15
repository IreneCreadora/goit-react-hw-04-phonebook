import { Label, TextArea } from '../Component.styled';
import FormError from '../FormikComponents/errorMessageFormik';

const NotesField = () => {
  return (
    <div>
      <Label htmlFor="notes">For notes</Label>
      <div>
        <TextArea name="notes" as="textarea" placeholder="For notes" />
        <FormError name="notes" />
      </div>
    </div>
  );
};
export default NotesField;
