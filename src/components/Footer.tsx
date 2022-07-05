import React, { FC } from 'react';
import styled from 'styled-components/macro';
import Flex from './UI/Flex';

type FooterProps = {
  children: React.ReactNode;
};

const FooterStyle = styled.footer`
  position: fixed;
  left: 0;
  bottom: 0;

  width: 100%;

  background-color: #fff;
`;

const Wrapper = styled(Flex)`
  gap: 10px;

  width: 100%;
  max-width: 1000px;
  height: 150px;
  margin: 0 auto;

  @media (max-width: 840px) {
    flex-direction: column;
    height: 260px;
  }
`;

const Footer: FC<FooterProps> = ({ children }) => {
  return (
    <FooterStyle>
      <Wrapper>{children}</Wrapper>
    </FooterStyle>
  );
};

export default Footer;
