import React from 'react'; 
import Particles from "react-tsparticles";
import './Style/Header.css';
// import UnopDropdown from "unop-react-dropdown";
import Banner from './Banner';
import Title from './Title.js';
import ListenIn from './ListenIn.js';
import Background from './Background';
import Player from './Player';
import Welcome1 from './Welcome1';

function Home() { 

  return (
    <div>
      {/* <Welcome1 /> */}
      <Banner />
      <Title />
      <Player/>
      <ListenIn/>
      <Background />
    </div>
  );
}


export default Home; 