import React from 'react';
import Typical from 'react-typical';

export const TypicalIntroTitle = () => (
  <>
    <Typical
      steps={[
        'Architect...',
        1200,
        'Architect... Developer...',
        1200,
        'Architect... Developer... Leader.',
        1200,
      ]}
      loop={1}
      wrapper="span"
    />
  </>
);
