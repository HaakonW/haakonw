import React from 'react';

import './App.css';

const CodeBlock = () => (
  <article className="codeBlock">
    <h3>{'<'}Developer</h3>
    <div>
      <div>
        education=<span>{'{bachelor}'} </span>
      </div>
      <div>
        age=<span>{'{age}'} </span>
      </div>
      <div>
        experience=<span>{'{experience}'} </span>
      </div>
      <div>
        type=
        <span>{'{frontEnd}'}</span>
      </div>
      <div>
        lang=
        <span>{'{[HTML, CSS, JavaScript, React]}'}</span>
      </div>
      <div>
        buzzwords=
        <span>{'{[Docker, openShift, FinTech]}'} </span>
      </div>
      <div>
        employer=
        <a
          href="http://wwww.mnemonic.io"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span>{'{mnemonic}'}</span>
        </a>
      </div>
    </div>
    <h3>{' />'}</h3>

    <h4>export default Developer</h4>
    <small>
      {'<!--'} <i>Not actucal code, you code nits</i> {'-->'}
    </small>
  </article>
);
export default CodeBlock;
