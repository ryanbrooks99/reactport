import React from 'react';
import Navbar from '../src/components/Navbar';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Home from '../src/components/pages/Home'
import Portfolio from '../src/components/pages/Portfolio'
import Resume from './components/pages/Resume'



function App() {
  return (
    <>
    <Router>
      <Navbar />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/#navigate' component={Portfolio} />
        <Route path='/resume' component={Resume} />
      </Switch>
    </Router>
    </>
  );
}

export default App;
