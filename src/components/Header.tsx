import React from 'react';
import styled from 'styled-components';
import Edwin from 'assets/svg/edwin.svg';
import { variables, breakpoints } from 'styles/variables';

const HeaderRoot = styled.header`
  display: block;
`;

const Content = styled.div`
  display: flex;
  align-items: center;
  padding: ${variables.gutter} 0;
`;

const Logo = styled(Edwin)`
  display: block;
`;

const LogoContainer = styled.div`
  width: 300px;

  @media screen and (min-width: ${breakpoints.sm}) {
    width: 400px;
  }

  @media screen and (min-width: ${breakpoints.lg}) {
    width: 500px;
  }
`;

const Navigation = styled.div`
  display: none;

  @media screen and (min-width: ${breakpoints.sml}) {
    display: flex;
    margin-left: auto;
    margin-right: 2rem;
  }
`;

export const Header = ({ children }: React.PropsWithChildren<{}>) => (
  <HeaderRoot>
    <Content>
      <LogoContainer>
        <a href="/">
          <Logo />
        </a>
      </LogoContainer>
      <Navigation>{children}</Navigation>
    </Content>
  </HeaderRoot>
);
