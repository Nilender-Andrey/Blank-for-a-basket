import React, { useState, FC } from 'react';
import styled from 'styled-components';

type Props = {
  placeholder?: string;
  step?: string;
  min?: string;
  max?: string;
  value: string;

  handler: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const InputStyle = styled.input``;

const CustomInputNumber: FC<Props> = ({ placeholder, value, handler }) => {
  console.log(value);

  return <InputStyle type='number' value={value} onInput={handler} />;
};

export default CustomInputNumber;
