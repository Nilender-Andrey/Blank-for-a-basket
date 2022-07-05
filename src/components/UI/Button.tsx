import React, { FC } from 'react';
import styled from 'styled-components/macro';

type ButtonProps = {
  handler?: () => void;
  children: React.ReactNode;
  type?: 'button' | 'submit' | 'reset' | undefined;
};

export const ButtonStyle = styled.button`
  position: relative;

  width: 100%;
  max-width: 250px;
  min-width: 200px;
  height: 30px;

  background-color: #24173d;
  color: #fff;
  font-size: 16px;
  border-radius: 10px;

  transition: 0.25s linear;

  &:hover {
    opacity: 0.9;
  }
  &:active {
    transform: scale(0.98);
  }
`;

const Button: FC<ButtonProps> = ({ children, handler, type }) => {
  return (
    <ButtonStyle onClick={handler} type={type}>
      {children}
    </ButtonStyle>
  );
};

export default Button;
