import styled from 'styled-components';

type ColoredLineProps = {
  w?: string;
  h?: string;
  bc?: string;
  m?: string;
};

const ColoredLine = styled.hr<ColoredLineProps>`
  width: ${(props) => props.w || '100%'};
  background-color: ${(props) => props.bc || 'black'};
  height: ${(props) => props.h || '1px'};
  margin: ${(props) => props.m};
`;

export default ColoredLine;
