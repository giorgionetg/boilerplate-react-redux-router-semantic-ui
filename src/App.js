import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import NavBar from './components/NavBar';
import HomePage from './routes/homepage';
import AboutMe from './routes/aboutme';

function App() {
  return (
    <Router>

      <NavBar />

      <Switch>
        <Route path="/about-me">
          <AboutMe />
        </Route>
        <Route path="/">
          <HomePage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
