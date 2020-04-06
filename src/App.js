import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          I am able to update home page!
        </a>
      </header>

      <body className="App-body">
        <Hello />
      </body>
      
    </div>
  );
}


function Hello() {
  return <div style={{"display": "block"}}>Really</div>;
}
export default App;
