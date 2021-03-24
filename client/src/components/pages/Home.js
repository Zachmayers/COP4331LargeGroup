import React from 'react'; 
import Particles from "react-tsparticles";
import './Style/Header.css';
// import UnopDropdown from "unop-react-dropdown";
import Banner from './Banner';
import Title from './Title.js';
import ListenIn from './ListenIn.js';
import Background from './Background';
import Player from './Player';

function Home() { 

  return (
    <div>
     <Banner/>

      <Player/>
      <ListenIn/>
      <Background />
    </div>
  );
}


export default Home; 