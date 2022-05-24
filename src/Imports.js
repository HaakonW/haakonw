import React from 'react';
import './App.css';

const Imports = () => (
  <ul>
    <li>
      import <span>{'{ bachelor }'}</span> from
      <span> './osloMet';</span>
    </li>
    <li>
      import <span>{'{ HTML, CSS, JavaScript, TypeScript, React }'}</span> from
      <span> './lang';</span>
    </li>
    <li>
      import <span>{'{ Docker, FinTech, Firebase, lean }'}</span> from
      <span> './buzzwords';</span>
    </li>
    import <span>{' { frontEnd, React, UI } '}</span> from
    <span> './specialties';</span>
    <li>
      import <span>{' { OMS, Mnemonic } '}</span> from
      <span> './utils/constants';</span>
    </li>
    <li>
      import <span>{'{ age, experience }'}</span> from
      <span>{' ./life '};</span>
    </li>
  </ul>
)

export default Imports;
