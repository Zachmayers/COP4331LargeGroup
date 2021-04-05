import React, { useState, useEffect } from 'react';
import {makeStyles} from '@material-ui/core/styles';
import {BrowserRouter as Router, NavLink, Route, Switch, withRouter} from 'react-router-dom';
import Particles from "react-tsparticles";
import './App.css';
import 'react-bootstrap';
import Home from './components/pages/Home';
import Banner from './components/pages/Banner'
import NowPlaying from './components/pages/NowPlaying/NowPlaying'
import Login from './components/pages/Login/Login'
import Signup from './components/pages/Signup';
import logo from './Logo-Head-Forward.png';
import Dropdown from './components/pages/NowPlaying/Dropdown';
import Listbox from './components/pages/NowPlaying/Listbox';
import Detail from './components/pages/NowPlaying/Detail';
import { Credentials } from './components/pages/NowPlaying/Credentials';
import axios from 'axios';
import TopArtists from './components/pages/TopArtists';
import TopTracks from './components/pages/TopTracks';
import Token from './components/auth/Token';
import { SpotifyApiContext, SpotifyApiAxiosContext } from 'react-spotify-api';

<SpotifyApiAxiosContext.Provider value={axios}>
  <SpotifyApiContext.Provider >
    <App />
  </SpotifyApiContext.Provider>
</SpotifyApiAxiosContext.Provider>

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
  const [navBackground, setNavBackground] = useState('navBarTransparent')

  const navRef = React.useRef()
  navRef.current = navBackground

  useEffect(() => {
    const handleScroll = () => {
      const show = window.scrollY > 10
      if(show) {
        setNavBackground('navBarSolid')
      } else {
        setNavBackground('navBarTransparent')
      }
    }  
      document.addEventListener('scroll', handleScroll)
      return () => {
        document.removeEventListener('scroll', handleScroll)
      }
  },[])


  return(
    <div className={navRef.current}>
      <HomeNavbar></HomeNavbar>
    </div>
    
  );
}

function HomeNavbar() {
  return(
    <nav className="navbar navbar-expand">
      <div className='container'>
        <ul className="navbar-nav mr-auto">
        <a className="navbar-brand text-white" href="#">Listen In</a>
          <li className="nav-item"><NavLink exact className="nav-link" activeClassName="active" to="/">Home</NavLink></li>
          <li className="nav-item"><NavLink exact className="nav-link" activeClassName="active" to="/NowPlaying">Now-playing</NavLink></li>
          <li className="nav-item"><NavLink exact className="nav-link" activeClassName="active" to="/TopTracks">Top Tracks</NavLink></li>
        </ul>
        <ul className="navbar-nav ml-auto">
          <li className="nav-item"><NavLink exact className="nav-link" activeClassName="active" to="/Login">Log in to Spotify</NavLink></li>
          <li className="nav-item"><NavLink exact className="nav-link" activeClassName="active" to="/Signup">Create an account</NavLink></li>
        </ul>
      </div>
    </nav>
  );
}

function HomePage() {
  return(
      <Banner />
  );
}

function Main() {
  return(

    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/NowPlaying" component={NowPlaying} />
      <Route exact path="/Signup" component={Signup} />
      <Route exact path="/Login" component={Login} />
      <Route exact path="/TopTracks" component={TopTracks} />
      <Route path="/verify:token" component={Token} />
    </Switch>

  );
}



export default App;
