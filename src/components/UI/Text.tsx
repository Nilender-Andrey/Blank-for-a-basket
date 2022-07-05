import React, { FC } from 'react';
import styled from 'styled-components/macro';

type TextProps = {
  children: React.ReactNode;
  fs?: string;
  ta?: string;
  color?: string;
  m?: string;
  p?: string;
  fw?: string | number;
  v?: string;
};

const TextStyle = styled.p<TextProps>`
  font-size: ${(props) => props.fs};
  font-weight: ${(props) => props.fw};
  color: ${(props) => props.color};
  text-align: ${(props) => props.ta};
  margin: ${(props) => props.m};
  padding: ${(props) => props.p};
  visibility: ${(props) => props.v};
`;

const Text: FC<TextProps> = ({ children, ...args }) => {
  return <TextStyle {...args}>{children}</TextStyle>;
};

export default Text;
