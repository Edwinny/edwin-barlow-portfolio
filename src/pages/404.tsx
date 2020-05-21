import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

import NotFoundIllustration from 'assets/illustrations/404.svg';
import { Thumbnail, ComponentWrapper } from 'components/sharedStyles';
import { responsiveFont } from 'styles/utils';

const Description = styled.div`
  ${responsiveFont(16, 22)}
  font-weight: 300;
  line-height: ${26 / 16};

  a {
    font-weight: 400;
    transition: 200ms opacity ease-in-out;

    &:hover {
      opacity: 0.5;
    }
  }
`;

// eslint-disable-next-line react/display-name
export default () => {
  return (
    <ComponentWrapper>
      <Description>
        You have failed to find that which did not exist. It may be best to return to{' '}
        <Link to="/">safety</Link>
      </Description>
      <Thumbnail>
        <img src={NotFoundIllustration} alt="Edwin Barlow, software architect" />
      </Thumbnail>
    </ComponentWrapper>
  );
};
