import React from 'react';

import './App.css';

const CodeBlock = () => (
  <article>
    <h2>{'<'}Developer</h2>
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
        <a href="http://wwww.oms.no" target="_blank" rel="noopener noreferrer">
          <span>{'{OMS}'}</span>
        </a>
      </li>
    </ul>
    <h2>{' />'}</h2>
    <h3>export default Developer</h3>
  </article>
);
export default CodeBlock;
