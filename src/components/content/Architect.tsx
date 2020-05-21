import React from 'react';

import ArchitectIllustration from 'assets/illustrations/architect.svg';

import { ComponentWrapper, ColumnLayout, Thumbnail } from 'components/sharedStyles';
import { ArchitectBlockText } from 'components/BlockText';

export const Architect = () => (
  // Make this wrapper smaller as we have the header
  <ComponentWrapper id="Architect">
    <ColumnLayout reverseColumns={true}>
      <Thumbnail>
        <img src={ArchitectIllustration} alt="Edwin Barlow, software architect" />
      </Thumbnail>
      <ArchitectBlockText heading="Architect">
        <p>
          Greetings! I&apos;m an experienced enterprise architect with a demonstrated
          history of developing technical solutions and architectural approaches to
          complex business problems.
        </p>
        <p>
          With a background which spans the information technology and services industry
          for both private and public sector corporations. From analysis to
          implementation, leading teams across all four TOGAF domains; Business, Data,
          Application and Technical Architecture
        </p>
        <p>
          Strong understanding, and broad experience, of many heavily regulated
          industries. Working within environments subject to ISO 9001, ISO 27001, PCI-DSS
          &amp; PMCPA compliance
        </p>
      </ArchitectBlockText>
    </ColumnLayout>
  </ComponentWrapper>
);
