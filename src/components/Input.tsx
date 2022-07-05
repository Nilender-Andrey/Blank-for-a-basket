import React, { FC } from 'react';
import styled from 'styled-components';

type InputProps = {
  type: string;
  placeholder?: string;
  step?: string;
  min?: string;
  max?: string;
  value?: string;

  handler?: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const InputStyle = styled.input`
  width: 100%;
  height: 35px;
  min-width: 200px;
  padding: 10px 20px;

  border: none;
  border-radius: 10px;

  font-size: 18px;
`;

const Input: FC<InputProps> = ({ handler, ...arg }) => {
  return <InputStyle {...arg} onInput={handler} />;
};

export default Input;
