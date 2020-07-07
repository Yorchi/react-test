import React from 'react';
import logo from './logo.svg';
import './App.css';
import {
  Switch,
  Route,
  Link
} from "react-router-dom";

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
          Learn React
        </a>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/users">Users</Link>
      <Switch>
        <Route path="/about">
         <h1>bout</h1>
        </Route>
        <Route path="/users">
         <h1>users</h1>
        </Route>
        <Route path="/">
          <h1>home</h1>
        </Route>
      </Switch>
      </header>

    </div>
  );
}

export default App;
