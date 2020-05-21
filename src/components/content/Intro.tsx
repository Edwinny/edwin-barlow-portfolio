import React from 'react';

import IntroIllustration from 'assets/illustrations/certificate.svg';

import { ComponentWrapper, ColumnLayout, Thumbnail } from 'components/sharedStyles';
import { IntroBlockText } from 'components/BlockText';

export const Intro = () => (
  // Make this wrapper smaller as we have the header
  <ComponentWrapper id="Intro">
    <ColumnLayout>
      <IntroBlockText>
        <p>Greetings!</p>
        <p>
          I&apos;m an experienced enterprise architect with a background rooted in
          software development &amp; consultancy spanning the information technology and
          services industry for both private and public sector corporations.
        </p>
        <p>
          Leverage agile frameworks to provide a robust synopsis for high level overviews.
          Iterative approaches to corporate strategy foster collaborative thinking to
          further the overall value proposition
        </p>
      </IntroBlockText>
      <Thumbnail>
        <img src={IntroIllustration} alt="Edwin Barlow, software architect" />
      </Thumbnail>
    </ColumnLayout>
  </ComponentWrapper>
);
