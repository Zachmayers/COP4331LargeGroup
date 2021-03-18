import React from 'react'; 
import Particles from "react-tsparticles";
import './Style/Header.css';
import Background from './Background';
function ListenIn() { 

  return (
      <div>
      <div className="center">
        stay tuned      -
        <a href="https://github.com/Zachmayers/COP4331LargeGroup"> Checkout our github</a>
        <audio src='song.mp3'/>
      </div>
      </div>
  );
}

export default ListenIn;