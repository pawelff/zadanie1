import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Documentation from './Documentation';
import Fib from './Fib';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          Realizacja zadania nr1 w ramach laboratorium PFSwCO<br />
          Paweł Firysiuk
          <Link to="/fib">Fib Calc</Link>
          <Link to="/documentation">Documentation</Link>
        </header>
        <div>
          <Route path="/fib" component={Fib} />
          <Route path="/documentation" component={Documentation} />
        </div>
      </div>
    </Router>
  );
}

export default App;
