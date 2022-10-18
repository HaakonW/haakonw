import React from 'react';
import AboutHeading from './AboutHeading';
import './App.css';
import Imports from './Imports';
import CodeBlock from './CodeBlock';
import { About } from './About';

function App() {
  return (
    <main>
      <section className="grid-1">
        <div className="item-1">
          <h1>Haakon Winther</h1>
        </div>

        <div className="item-2">
          <AboutHeading />
        </div>

        <div className="item-3">
          <Imports />
          <CodeBlock />
        </div>
        <div className="item-4">
          <About />
        </div>
      </section>
    </main>
  );
}

export default App;
