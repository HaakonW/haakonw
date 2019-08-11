import React from 'react';
import About from './About';
import './App.css';
import Imports from './Imports';
import CodeBlock from './CodeBlock';

function App() {
  return (
    <main className="container">
      <div className="leftSide">
        <div>
          <h1>Haakon Winther</h1>
          <Imports />
          <CodeBlock />
        </div>
      </div>
      <About />
    </main>
  );
}

export default App;
