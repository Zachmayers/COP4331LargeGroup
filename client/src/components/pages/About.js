import React from 'react'; 
import Particles from "react-tsparticles";
import './Style/Header.css';
import './Style/Banner.css';
import Title from './Title.js';
import ListenIn from './ListenIn.js';
import Background from './Background';
import Player from './Player';
import Banner from './Banner';

function About() { 

  return (
    <div>
      <div>
        <div className="row">
        {/* <div className="col xs-4 sm-4 md-6 lg-8 xl-10"> */}
          <Title />
          <Player/>
          <div className="center">
            Listen In for more      -
            <a href="https://github.com/Zachmayers/COP4331LargeGroup"> Checkout our github</a>
            <audio src='song.mp3'/>
          </div>
          {/* <ListenIn/>  */}
          {/* </div> */}
        </div>
       
      </div>
      <Background />
    </div>
  );
}


export default About; 