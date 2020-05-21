import React from 'react';
import styled from 'styled-components';
import { Styles } from 'styles/base';

import Github from 'assets/svg/github.svg';
import Linkedin from 'assets/svg/linkedin.svg';
import Source from 'assets/svg/source.svg';

import { Footer } from 'components/Footer';
import { Header } from 'components/Header';
import { HeaderLink } from 'components/HeaderLink';
import { Seo } from 'components/Seo';
import { Container } from 'components/Container';
import { Fonts } from 'components/Fonts';
import { breakpoints } from 'styles/variables';

const Layout = styled.div`
  display: block;
  min-height: 100vh;

  @media screen and (min-width: ${breakpoints.sm}) {
    background: #eae8ec; /* Old browsers */
    background: -moz-linear-gradient(-45deg, #eae8ec 0%, #ffffff 100%); /* FF3.6-15 */
    background: -webkit-linear-gradient(
      -45deg,
      #eae8ec 0%,
      #ffffff 100%
    ); /* Chrome10-25,Safari5.1-6 */
    background: linear-gradient(
      135deg,
      #eae8ec 0%,
      #ffffff 100%
    ); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
  }
`;

// eslint-disable-next-line react/display-name
export default ({ children }: React.PropsWithChildren<{}>) => (
  <>
    <Seo />
    <Fonts />
    <Styles />

    <Layout>
      <Container>
        <Header>
          <HeaderLink name="Architect" href="Architect" />
          <HeaderLink name="Developer" href="Developer" />
          <HeaderLink name="Contact" href="Contact" />
        </Header>
        <>{children}</>
      </Container>

      <Footer
        social={[
          { icon: <Github />, to: 'https://github.com/Edwinny' },
          { icon: <Linkedin />, to: 'https://www.linkedin.com/in/edwin-barlow' },
          { icon: <Source />, to: 'https://github.com/Edwinny/edwin-barlow-portfolio' },
        ]}
      />
    </Layout>
  </>
);
