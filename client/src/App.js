import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Particles from "react-tsparticles";
import './App.css';
import Home from './components/pages/Home';
import logo from './Logo-Head-Forward.png';

function App() {
  return (
    <div className="App">     
      <Router>
        <Navigation />
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
  return (
  <div>
    <img  src={logo}/>
  </div>
  );
  
}

function Main() {
  return(
    
    <Switch>
      <Route exact path="/" component={Home} />
    </Switch>
   
  );
}

export default App;
