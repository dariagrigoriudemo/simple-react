import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hello Static App Demo
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <a 
          className="App-link"
          href="https://authentication.azurestaticwebsites.net/.auth/login/aad?post_login_redirect_uri=cheerful-spring-092BDD3F.azurestaticwebsites.net"
        >
        Log in with Azure AD
        </a>
      </header>
    </div>
  );
}

export default App;
