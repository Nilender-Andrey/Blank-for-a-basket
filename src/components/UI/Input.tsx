import React, { FC } from 'react';
import styled from 'styled-components/macro';

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
  height: 30px;
  min-width: 300px;
  padding: 10px 20px;

  border: none;
  border-radius: 10px;

  font-size: 16px;
`;

const Input: FC<InputProps> = ({ handler, ...arg }) => {
  return <InputStyle {...arg} onInput={handler} />;
};

export default Input;
