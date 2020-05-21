import React, { ReactNode } from 'react';
import styled from 'styled-components';

import { Container } from 'components/Container';
import footerSvg from 'assets/illustrations/footer.svg';
import { breakpoints } from 'styles/variables';
import { responsiveFont } from 'styles/utils';

interface Social {
  icon: ReactNode;
  to: string;
}

interface FooterProps {
  social: Social[];
}

const FooterRoot = styled.div`
  right: 0;
  bottom: 0;
  left: 0;
`;

const Content = styled(Container)`
  display: flex;
  justify-content: space-between;
  border-bottom: 10px solid #4d4d4d;
  padding: 10px 20px;

  @media screen and (min-width: ${breakpoints.sm}) {
    padding: 40px 70px;
  }
`;

const Copyright = styled.p`
  ${responsiveFont(12, 18)}
  color: #444444;
  font-weight: 300;
`;

const List = styled.ul`
  display: flex;
`;

const ListItem = styled.li`
  margin-left: 30px;
  transition: 200ms opacity ease-in-out;
  &:hover {
    opacity: 0.5;
  }
`;

const FooterBackground = styled.div`
  padding-top: 5rem;
  background-image: url(${footerSvg});
  background-size: cover;
  background-position: top;
  background-repeat: no-repeat;

  @media screen and (min-width: ${breakpoints.sm}) {
    padding-top: 9rem;
  }
`;

export const Footer = ({ social }: FooterProps) => (
  <FooterRoot>
    <FooterBackground>
      <Content>
        <Copyright>Copyright &copy; 2020 Edwin Barlow</Copyright>
        <List>
          {social.map((item) => (
            <ListItem key={item.to}>
              <a href={item.to} target="_blank" rel="noopener noreferrer">
                {item.icon}
              </a>
            </ListItem>
          ))}
        </List>
      </Content>
    </FooterBackground>
  </FooterRoot>
);
