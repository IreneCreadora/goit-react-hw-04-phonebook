import styled from '@emotion/styled';
import { Form, Field } from 'formik';

export const Container = styled.div`
  margin: 20px auto 20px auto;
  width: 500px;
  height: auto;
  padding: 20px;
  background: rgba(0, 0, 0, 0.3);
  border-radius: 5%;
`;

export const Phonebook = styled.h1`
  margin-bottom: 16px;
  font-weight: 500;
  font-size: 30px;
  line-height: 1.18;
  text-align: center;
  color: #979595;
`;

export const FormStyled = styled(Form)`
  display: flex;
  flex-direction: column;
  padding: 5px 10px;

  font-weight: 400;
  font-size: 16px;
  line-height: 1.33;
  color: white;
`;
export const Input = styled(Field)`
  width: 100%;
  background-color: inherit;
  outline: none;
  border-radius: 4px;
  padding: 5px;
  height: 28px;
  font-size: 16px;
  color: antiquewhite;
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  padding: 5px 10px;
`;

export const TextArea = styled(Field)`
  width: 100%;
  height: 60px;
  padding: 8px 10px;
  border: 1px solid rgba(0, 0, 0, 0.5);
  border-radius: 4px;
  resize: none;
  font-weight: 400;
  font-size: 14px;
  line-height: 1.14;
  letter-spacing: 0.01em;
  background-color: inherit;
  outline: none;
  color: antiquewhite;
`;

export const Button = styled.button`
  display: block;
  margin: 20px auto 0 auto;
  padding: 8px;
  font-size: 12px;
  color: #e0dede;
  min-width: 100px;
  border: 1px solid gray;
  border-radius: 5px;
  background: rgba(0, 0, 0, 0.5);
  text-shadow: 0 0 5px #000;
`;

export const Contacts = styled.h2`
  margin-top: 20px;
  margin-bottom: 16px;
  font-weight: 500;
  font-size: 30px;
  line-height: 1.18;
  text-align: center;
  color: #979595;
`;

export const Section = styled.section`
  margin: 20px auto;
`;

export const Message = styled.h3`
  color: #003060;
`;

export const FilterStyled = styled.label`
  color: #979595;
`;

export const FilterInput = styled.input`
  width: 100%;
  background-color: inherit;
  outline: none;
  border-radius: 4px;
  padding: 5px;
  height: 28px;
  font-size: 16px;
  color: antiquewhite;
`;

export const ContactListStyled = styled.ul`
  justify-content: center;
  align-items: center;
  padding: 10px 0;
`;

export const ContactItemStyled = styled.li`
  display: block;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  margin: 4px 0;
  padding: 5px 10px;
  border-radius: 5%;
  border: 1px solid gray;
  font-weight: 400;
  font-size: 16px;
  line-height: 1.33;
  color: white;
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const DeleteBtn = styled.button`
  display: block;
  padding: 8px;
  font-size: 12px;
  color: #e0dede;
  width: 60px;
  border: 1px solid gray;
  border-radius: 5px;
  background: rgba(0, 0, 0, 0.5);
  text-shadow: 0 0 5px #000;
`;

export const ErrorText = styled.p`
  color: red;
`;
export const Info = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  font-weight: 400;
  font-size: 12px;
  line-height: 1.1;
  color: #979595;
`;

export const Notes = styled.p`
  align-self: flex-end;
  font-weight: 400;
  font-size: 12px;
  line-height: 1.1;
  color: gray;
`;
