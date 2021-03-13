import React from 'react'; 
import Particles from "react-tsparticles";
import './Style/Header.css';
// import UnopDropdown from "unop-react-dropdown";
import Title from './Title.js';
import ListenIn from './ListenIn.js';
import Background from './Background';

function Home() { 

  return (
    <div>
      <Title />
      <ListenIn />
      <Background/>
    </div>
  );
}




export default Home; 