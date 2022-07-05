import React, { FC } from 'react';
import styled from 'styled-components';

type TextProps = {
  children: React.ReactNode;
  fs?: string;
  ta?: string;
  color?: string;
  m?: string;
  fw?: string | number;
};

const TextStyle = styled.p<TextProps>`
  font-size: ${(props) => props.fs};
  font-weight: ${(props) => props.fw};
  color: ${(props) => props.color};
  text-align: ${(props) => props.ta};
  margin: ${(props) => props.m};
`;

const Text: FC<TextProps> = ({ children, ...args }) => {
  return <TextStyle {...args}>{children}</TextStyle>;
};

export default Text;
