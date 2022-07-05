import React, { FC } from 'react';
import styled from 'styled-components/macro';
import Button from './Button';

type FormProps = {
  children: React.ReactNode;
  submit: (event: React.SyntheticEvent) => void;
  buttonText: string;
};

const FormStyle = styled.form`
  width: 100%;
  text-align: center;

  @media (max-width: 680px) {
    flex-direction: column;
  }
`;

const Form: FC<FormProps> = ({ children, submit, buttonText }) => {
  return (
    <FormStyle onSubmit={submit}>
      {children}

      <Button type='submit'>{buttonText}</Button>
    </FormStyle>
  );
};

export default Form;
