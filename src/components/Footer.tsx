import React, { FC } from 'react';
import styled from 'styled-components';

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

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;

  width: 100%;
  max-width: 1000px;
  min-height: 110px;
  margin: 0 auto;

  @media (max-width: 840px) {
    flex-direction: column;
    min-height: 90px;
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
