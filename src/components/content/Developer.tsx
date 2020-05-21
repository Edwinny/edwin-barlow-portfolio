import React from 'react';

import DevIllustration from 'assets/illustrations/code-review.svg';

import { ComponentWrapper, ColumnLayout, Thumbnail } from 'components/sharedStyles';
import { DeveloperBlockText } from 'components/BlockText';

export const Developer = () => (
  <ComponentWrapper id="Developer">
    <ColumnLayout>
      <DeveloperBlockText heading="Developer">
        <p>
          Outcome and detail-oriented Developer with a knack for conceptualizing and
          delivering elegant, user-friendly solutions effectively and efficiently. Armed
          with an extensive understanding of end-to-end SDLC and cloud architectures.
          Regular participant and organizer of local hackathons and web developer meetups.
        </p>
        <p>
          My background spans the information technology and services industry for both
          private and public sector corporations. From analysis to implementation, leading
          teams across all four TOGAF domains; Business, Data, Application and Technical
          Architecture
        </p>
      </DeveloperBlockText>
      <Thumbnail>
        <img src={DevIllustration} alt="Edwin Barlow, software architect" />
      </Thumbnail>
    </ColumnLayout>
  </ComponentWrapper>
);
