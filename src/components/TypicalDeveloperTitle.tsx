import React from 'react';
import Typical from 'react-typical';

export const TypicalDeveloperTitle = () => (
  <>
    <Typical
      steps={['Frontend', 1200, 'Backend', 1200, 'Database', 1200, 'DevOps', 1200]}
      loop={Infinity}
      wrapper="span"
    />
  </>
);
