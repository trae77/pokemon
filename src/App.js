import logo from './logo.svg';
import './App.css';
import React from 'react';
import "./Components/style.css";
import Main from './Components/Main';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
       
      </header>
      <Main />
    </div>
  );
}

export default App;
