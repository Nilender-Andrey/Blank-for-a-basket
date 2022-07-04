import React, { FC } from 'react';
import styled from 'styled-components';

type FormProps = {
  children: React.ReactNode;
  submit: (event: React.SyntheticEvent) => void;
};

const FormStyle = styled.form`
  display: flex;
  justify-content: space-between;
  align-items: center;

  max-width: 800px;
  margin: 0 auto;
  padding: 10px 20px;

  background-color: #ffc633;
  border-radius: 10px;

  div {
    width: 60%;
  }

  button {
    width: 250px;
    height: 35px;
    align-items: flex-end;

    background-color: #24173d;

    color: #fff;
    font-size: 18px;
    border-radius: 10px;
  }

  @media (max-width: 680px) {
    flex-direction: column;

    div {
      width: 100%;
    }
  }
`;
const CustomForm: FC<FormProps> = ({ children, submit }) => {
  return (
    <FormStyle onSubmit={submit}>
      <div>{children}</div>

      <button type='submit'>Добавить</button>
    </FormStyle>
  );
};

export default CustomForm;
