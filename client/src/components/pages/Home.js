import React from 'react'; 
import Particles from "react-tsparticles";
import './Header.css';
// import UnopDropdown from "unop-react-dropdown";
import { animated } from 'react-spring';

function Home() { 

  return (
    <div>
    
      <div class="center">
      
        <h1>listen in</h1>
        <b class="blink">.</b><b class="blink2">.</b><b class="blink3">.</b>
      </div>
      <div class="center">
        stay tuned.
      </div>
      {<Background/>}
    </div>
  );
}




function Background() {
  return(
    <Particles
        id="tsparticles"
        
        options={{
          background: {
            color: {
              value: "#6BB3F2",
            },
          },
          fpsLimit: 60,
          interactivity: {
            detectsOn: "canvas",
            events: {
              onClick: {
                enable: true,
                mode: "push",
              },
              onHover: {
                enable: true,
                mode: "repulse",
              },
              resize: true,
            },
            modes: {
              bubble: {
                distance: 400,
                duration: 2,
                opacity: 0.8,
                size: 40,
              },
              push: {
                quantity: 4,
              },
              repulse: {
                distance: 200,
                duration: 0.4,
              },
            },
          },
          particles: {
            color: {
              value: "#ffffff",
            },
            links: {
              color: "#ffffff",
              distance: 150,
              enable: true,
              opacity: 0.5,
              width: 1,
            },
            collisions: {
              enable: true,
            },
            move: {
              direction: "none",
              enable: true,
              outMode: "bounce",
              random: false,
              speed: 6,
              straight: false,
            },
            number: {
              density: {
                enable: true,
                value_area: 800,
              },
              value: 80,
            },
            opacity: {
              value: 0.5,
            },
            shape: {
              type: "circle",
            },
            size: {
              random: true,
              value: 5,
            },
          },
          detectRetina: true,
        }}
       
      />
  )
}


export default Home; 