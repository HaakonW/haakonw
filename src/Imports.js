import React from 'react';
import './App.css';

const Imports = () => (
  <div className="imports">
    import <span>{'{bachelor}'}</span> from
    <span> './osloMet';</span> <br />
    import <span>{'{HTML, CSS, JavaScript, TypeScript, React}'}</span> from
    <span> './lang';</span>
    <br />
    import <span>{'{firebase, cloud, lean, fintech }'}</span> from
    <span> './buzzwords';</span> <br />
    import <span>{' {frontEnd, React, UI} '}</span> from
    <span> './specialties';</span> <br />
    import <span>{' {OMS, Mnemonic} '}</span> from
    <span> './utils/constants';</span> <br />
    import <span>{'{age, experience}'}</span> from
    <span>{' ./life '};</span>
  </div>
);

export default Imports;
