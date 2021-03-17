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
      <Banner />
      <Title />
      <Player/>
      <ListenIn style={{position: 'relative', zIndex:'1'}}>
        </ListenIn>
      <Background style={{position: 'absolute', zIndex:'-1'}}>
      </Background>
    </div>
  );
}


export default Home; 