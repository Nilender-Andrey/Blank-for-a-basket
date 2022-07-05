import React, { FC } from 'react';
import styled from 'styled-components/macro';
import Button from './Button';

type FormProps = {
  children: React.ReactNode;
  submit: (event: React.SyntheticEvent) => void;
  buttonText: string;
};

const FormStyle = styled.form`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 5px;

  width: 100%;
  max-width: 700px;
  margin: 0 auto;
  padding: 10px 20px;

  background-color: #ffc633;
  border-radius: 0 0 10px 10px;

  div {
    width: 60%;
  }

  @media (max-width: 680px) {
    flex-direction: column;

    div {
      width: 100%;
    }
  }
`;

const Form: FC<FormProps> = ({ children, submit, buttonText }) => {
  return (
    <FormStyle onSubmit={submit}>
      <div>{children}</div>

      <Button type='submit'>{buttonText}</Button>
    </FormStyle>
  );
};

export default Form;
