import React from 'react';
import './App.css';

const Imports = () => (
  <div className="imports">
    <div>
      import <span>{'{bachelor}'}</span> from
      <span> './osloMet';</span>
    </div>
    <div>
      import <span>{'{HTML, CSS, JavaScript, TypeScript, React}'}</span> from
      <span> './lang';</span>
    </div>
    <div>
      import <span>{'{firebase, cloud, lean, fintech }'}</span> from
      <span> './buzzwords';</span>
    </div>
    import <span>{' {frontEnd, React, UI} '}</span> from
    <span> './specialties';</span>
    <div>
      import <span>{' {OMS, Mnemonic} '}</span> from
      <span> './utils/constants';</span>
    </div>
    <div>
      import <span>{'{age, experience}'}</span> from
      <span>{' ./life '};</span>
    </div>
  </div>
);

export default Imports;
