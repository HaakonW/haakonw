import React from 'react';

import './App.css';

const CodeBlock = () => (
  <article>
    <h3>{'<'}Developer</h3>
    <ul>
      <li>
        education=<span>{'{bachelor}'} </span>
      </li>
      <li>
        age=<span>{'{age}'} </span>
      </li>
      <li>
        experience=<span>{'{experience}'} </span>
      </li>
      <li>
        type=
        <span>{'{frontEnd}'}</span>
      </li>
      <li>
        lang=
        <span>{'{[HTML, CSS, JavaScript, React]}'}</span>
      </li>
      <li>
        buzzwords=
        <span>{'{[Docker, openShift, FinTech]}'} </span>
      </li>
      <li>
        employer=
        <a
          href="http://wwww.mnemonic.io"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span>{'{mnemonic}'}</span>
        </a>
      </li>
    </ul>
    <h2>{' />'}</h2>
    <small>
      {'<!--'} <i>Not actucal code, you code nits</i> {'-->'}
    </small>
    <h3>export default Developer</h3>
  </article>
);
export default CodeBlock;
