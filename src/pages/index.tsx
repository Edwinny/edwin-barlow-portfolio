import React from 'react';

import { Seo } from 'components/Seo';
import { Architect } from 'components/content/Architect';
import { Developer } from 'components/content/Developer';
import { Intro } from 'components/content/Intro';
import { Contact } from 'components/content/Contact';

// eslint-disable-next-line react/display-name
export default () => (
  <>
    <Seo
      title="Edwin Barlow Resume"
      description="Experienced software architect with a demonstrated history of working for both private and public sector corporations"
    />

    <Intro />
    <Architect />
    <Developer />
    <Contact />
  </>
);
