import React, { useState, useEffect } from 'react';
import {BrowserRouter as Router, NavLink, Route, Switch, withRouter} from 'react-router-dom';
import Particles from "react-tsparticles";
import './App.css';
import 'react-bootstrap';
import Home from './components/pages/Home';
import Banner from './components/pages/Banner'
import NowPlaying from './components/pages/NowPlaying/NowPlaying'
import Login from './components/pages/Login/SpotifyAuth'
import GetToken from './components/pages/Login/GetTokens'
import Signup from './components/pages/Signup';
import logo from './Logo-Head-Forward.png';
import Dropdown from './components/pages/NowPlaying/Dropdown';
import Listbox from './components/pages/NowPlaying/Listbox';
import Detail from './components/pages/NowPlaying/Detail';
import { Credentials } from './components/pages/NowPlaying/Credentials';
import axios from 'axios';
import TopArtists from './components/pages/TopArtists';
import TopTracks from './components/pages/TopTracks';
import TopTracksArtist from './components/pages/TopTracksArtist';
import DiscoverNew from './components/pages/DiscoverNew';
import Token from './components/auth/Token';
import localStorage from 'local-storage';
import About from './components/pages/About'

function App() {
    const [user, setUser] = useState({});
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

  return (
    <div className="App">
      <Router>
        <div className={navRef.current}>
            <HomeNavbar setUser={setUser} user={user}></HomeNavbar>
        </div>
        <div>
          <Main setUser={setUser} user={user}/>
        </div>
      </Router>
    </div>
  );
}

function HomeNavbar(props) {
    function logOut() {props.setUser({})}
  return(
    <nav className="navbar navbar-expand">
      <div className='container'>
        <ul className="navbar-nav mr-auto">
        <a className="navbar-brand text-white" href="#">Listen In</a>
          <li className="nav-item"><NavLink exact className="nav-link" activeClassName="active" to="/">Home</NavLink></li>
          <li className="nav-item"><NavLink exact className="nav-link" activeClassName="active" to="/About">About Us</NavLink></li>
          <li className="nav-item"><NavLink exact className="nav-link" activeClassName="active" to="/TopArtists">Top Artists</NavLink></li>
          <li className="nav-item"><NavLink exact className="nav-link" activeClassName="active" to="/TopTracks">Top Tracks</NavLink></li>
          <li className="nav-item"><NavLink exact className="nav-link" activeClassName="active" to="/DiscoverNew">Discover New Music</NavLink></li>
        </ul>
        {
          props.user.name ?
          <ul className="navbar-nav ml-auto">
            <li className="navbar-brand text-white">{props.user.name}</li>
            <li className="nav-item"><a className="nav-link" href="javascript:void(null);" onClick={logOut}>Log out</a></li>
          </ul>
          :
          <ul className="navbar-nav ml-auto">
          <li className="nav-item"><NavLink exact className="nav-link" activeClassName="active" to="/Login">Log in to Spotify</NavLink></li>
        </ul>
        }
      </div>
    </nav>
  );
}

function Main(props) {
  return(

    <Switch>
        <Route exact path="/" render={(p) => <Home {...p} user={props.user} />} />
    <Route exact path="/NowPlaying" component={NowPlaying} />
        <Route exact path="/Login" render={(p) => <Login {...p} user={props.user} />} />
        <Route exact path="/About" render={(p) => <About {...p} user={props.user} />} />
      <Route exact path="/TopArtists" render={(p) => <TopArtists {...p} user={props.user} />} />
      <Route exact path="/TopTracks" render={(p) => <TopTracks {...p} user={props.user} />} />
      <Route exact path="/DiscoverNew" render={(p) => <DiscoverNew {...p} user={props.user} />} />
      <Route path="/TopTracksArtist/:id/:name" render={(p) => <TopTracksArtist {...p} user={props.user}/>} />
      <Route path="/verify" component={Token} />
    </Switch>

  );
}

export default App;