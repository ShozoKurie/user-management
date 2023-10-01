import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import Auth from './Auth';

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/" component={Auth} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
