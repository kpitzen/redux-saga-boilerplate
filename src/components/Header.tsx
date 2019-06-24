import React from 'react';
import logo from '../assets/logo.svg';
import CounterButtons from './CounterButtons';
import Jumbotron from 'react-bootstrap/Jumbotron';

const Header: React.FC = () => {
  return (
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <Jumbotron>
        <CounterButtons />
      </Jumbotron>
    </header>
  )
}

export default Header;
