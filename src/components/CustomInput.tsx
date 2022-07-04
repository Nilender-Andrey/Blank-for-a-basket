import React, { FC } from 'react';
import styled from 'styled-components';

type Props = {
  type: string;
  placeholder?: string;
  step?: string;
  min?: string;
  max?: string;
  value: string;
  isFilled: boolean;

  handler: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

interface InputStyleProps {
  isFilled: boolean;
}

const InputStyle = styled.label<InputStyleProps>`
  display: block;
  width: 100%;
  margin-bottom: 5px;

  &:last-child {
    margin-bottom: 0;
  }

  p {
    visibility: ${(props) => (props.isFilled ? 'hidden' : 'visible')};

    padding: 5px 20px;

    font-size: 14px;
    color: red;
  }
  input {
    width: 100%;
    height: 35px;
    padding: 10px 20px;

    border: none;
    border-radius: 10px;

    font-size: 18px;
  }
`;

const CustomInput: FC<Props> = ({ handler, isFilled, ...args }) => {
  return (
    <InputStyle isFilled={isFilled}>
      <input onInput={handler} {...args} />
      <p>Поле не заполнено</p>
    </InputStyle>
  );
};

export default CustomInput;
