import React from 'react';
import './App.css';

const Imports = () => (
  <ul>
    <li>
      import <span>{'{ bachelor }'}</span> from
      <span> './osloMet';</span>
    </li>
    <li>
      import <span>{'{ HTML, CSS, JavaScript, React }'}</span> from
      <span> './lang';</span>
    </li>
    <li>
      import <span>{'{ Docker, OpenShift, FinTech }'}</span> from
      <span> './buzzwords';</span>
    </li>
    import <span>{' { frontEnd, UX, UI } '}</span> from
    <span> './specialties';</span>
    <li>
      import <span>{' { OMS } '}</span> from
      <span> './utils/constants';</span>
    </li>
    <li>
      import <span>{'{ happy, age, experience }'}</span> from
      <span>{' ./life '};</span>
    </li>
  </ul>
);

export default Imports;
