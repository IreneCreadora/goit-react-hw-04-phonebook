import * as Yup from 'yup';
import { relations } from './relations';

export const validationSchema = Yup.object({
  relation: Yup.string().required('Please select a relation').oneOf(relations),
  name: Yup.string().required(),
  number: Yup.number().min(8, 'Too Short!').required(),
  notes: Yup.string(),
  birthDate: Yup.date().nullable().min(new Date(1960, 0, 30)),
  importantContact: Yup.boolean().default(false),
});
