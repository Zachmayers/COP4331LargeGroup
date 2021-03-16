import React, { useState, useEffect } from 'react';
import {BrowserRouter as Router, NavLink, Route, Switch, withRouter} from 'react-router-dom';
import Particles from "react-tsparticles";
import './App.css';
import Home from './components/pages/Home';
import NowPlaying from './components/pages/NowPlaying'
import Testing from './components/pages/Testing'
import logo from './Logo-Head-Forward.png';
import Dropdown from './components/pages/Dropdown';
import Listbox from './components/pages/Listbox';
import Detail from './components/pages/Detail';
import { Credentials } from './components/pages/Credentials';
import axios from 'axios';

function App() {

  return (
    <div className="App">     
      <Router>
        <Navigation>
          </Navigation>
        <div>
          <Main />
        </div>
      </Router>
    </div>
  );
}

function Navigation() {
  return(
    <HomeNavbar />
  );
}


function HomeNavbar() {
  return(
    <nav className="navbar navbar-expand-lg white">
      <div className='container'>
        <ul className="navbar-nav mr-auto">
          <li className="nav-item"><NavLink exact className="nav-link" activeClassName="active" to="/">Home</NavLink></li>
          <li className="nav-item"><NavLink exact className="nav-link" activeClassName="active" to="/NowPlaying">Now-playing</NavLink></li>
        </ul>
      </div>
    </nav>
  );
}

function Main() {
  return(
    
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/NowPlaying" component={NowPlaying} />
      <Route exact path="/Testing" component={Testing} />
    </Switch>
   
  );
}



export default App;
