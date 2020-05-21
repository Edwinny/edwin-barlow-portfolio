/* eslint-disable react/prop-types */
import React, { FunctionComponent } from 'react';
import styled from 'styled-components';

import { responsiveFont } from 'styles/utils';
import { breakpoints, variables } from 'styles/variables';
import { TypicalArchitectTitle } from 'components/TypicalArchitectTitle';
import { TypicalDeveloperTitle } from 'components/TypicalDeveloperTitle';
import { TypicalIntroTitle } from 'components/TypicalIntroTitle';

type BlockTextProps = {
  heading?: string;
};

const Block = styled.div`
  flex: 1;
  @media screen and (min-width: ${breakpoints.sml}) {
    max-width: 50%;
  }

  p {
    margin: 2em 0;
  }
`;

const Heading = styled.h1`
  ${responsiveFont(18, 30)}
  margin-bottom: 10px;
  font-family: ${variables.font.familyHeading};
  display: inline;
`;

const Description = styled.div`
  ${responsiveFont(16, 18)}
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

export const BlockText: FunctionComponent<BlockTextProps> = ({ heading, children }) => (
  <Block>
    <Heading>{heading}</Heading>
    <Description>{children}</Description>
  </Block>
);

export const IntroBlockText: FunctionComponent<BlockTextProps> = ({
  heading,
  children,
}) => (
  <Block>
    <Heading>
      <TypicalIntroTitle />
      {heading}
    </Heading>
    <Description>{children}</Description>
  </Block>
);

export const ArchitectBlockText: FunctionComponent<BlockTextProps> = ({
  heading,
  children,
}) => (
  <Block>
    <Heading>
      <TypicalArchitectTitle />
      {heading}
    </Heading>
    <Description>{children}</Description>
  </Block>
);

export const DeveloperBlockText: FunctionComponent<BlockTextProps> = ({
  heading,
  children,
}) => (
  <Block>
    <Heading>
      <TypicalDeveloperTitle />
      {heading}
    </Heading>
    <Description>{children}</Description>
  </Block>
);
