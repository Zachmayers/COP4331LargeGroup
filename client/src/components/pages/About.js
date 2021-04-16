import React from 'react'; 
import Particles from "react-tsparticles";
import './Style/Header.css';
import Title from './Title.js';
import ListenIn from './ListenIn.js';
import Background from './Background';
import Player from './Player';

function About() { 

  return (
    <div>
      <Title />
      <Player/>
      <ListenIn/>
      <Background />
    </div>
  );
}


export default About; 