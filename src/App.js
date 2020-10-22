import React from 'react';
import Navbar from '../src/components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
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
        <Route path='/' exact component={Home} />
        <Route path='/#navigate' component={Portfolio} />
        <Route path={require('../src/images/Ryan_L_Brooks_Resume.pdf')} component={Resume} />
      </Switch>
    </Router>
    </>
  );
}

export default App;
