import React from 'react';
import logo from './logo.svg';
import './App.less';
import { Link } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <Link to="/pagea" className="App-link">A 页面</Link>
        <Link to="/pageb" className="App-link">B 页面</Link>
      </header>
    </div>
  );
}

export default App;
