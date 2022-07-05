import React, { FC } from 'react';
import styled from 'styled-components';

type CustomButtonProps = {
  handler?: () => void;
  children: React.ReactNode;
  type?: 'button' | 'submit' | 'reset' | undefined;
};

export const CustomButtonStyle = styled.button`
  position: relative;

  width: 100%;
  max-width: 250px;
  min-width: 200px;
  height: 35px;

  background-color: #24173d;
  color: #fff;
  font-size: 18px;
  border-radius: 10px;

  transition: 0.25s linear;

  &:hover {
    opacity: 0.9;
  }
  &:active {
    transform: scale(0.98);
  }
`;

const CustomButton: FC<CustomButtonProps> = ({ children, handler, type }) => {
  return (
    <CustomButtonStyle onClick={handler} type={type}>
      {children}
    </CustomButtonStyle>
  );
};

export default CustomButton;
