import React from 'react';
import './App.css';

import { Route } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import { HomePage } from './components/HomePage';

const rootPath = "/";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Route exact={true} path={rootPath} component={HomePage}/>
    </BrowserRouter>
  );
}

export default App;
