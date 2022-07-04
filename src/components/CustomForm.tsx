import React, { FC } from 'react';
import styled from 'styled-components';

type FormProps = {
  children: React.ReactNode;
};

const FormStyle = styled.form``;

const CustomForm: FC<FormProps> = ({ children }) => {
  return (
    <FormStyle>
      {children}
      <button>Добавить</button>
    </FormStyle>
  );
};

export default CustomForm;
