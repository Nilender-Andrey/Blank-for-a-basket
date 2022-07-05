import styled from 'styled-components';

type FlexProps = {
  jc?: string;
  ai?: string;
  fw?: string;
  g?: string;
  fd?: string;

  m?: string;
};

const Flex = styled.div<FlexProps>`
  display: flex;
  justify-content: ${(props) => props.jc || 'center'};
  align-items: ${(props) => props.ai || 'center'};
  flex-wrap: ${(props) => props.fw};
  gap: ${(props) => props.g};
  flex-direction: ${(props) => props.fd};

  margin: ${(props) => props.m};
`;

export default Flex;
