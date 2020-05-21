import React from 'react';
import Typical from 'react-typical';

export const TypicalArchitectTitle = () => (
  <>
    <Typical
      steps={[
        'Enterprise',
        1200,
        'Business',
        1200,
        'Data',
        1200,
        'Application',
        1200,
        'Technical',
        1200,
      ]}
      loop={Infinity}
      wrapper="span"
    />
  </>
);
