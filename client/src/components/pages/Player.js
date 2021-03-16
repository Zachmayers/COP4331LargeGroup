import React from 'react'; 
import Particles from "react-tsparticles";
import './Style/Header.css';
// import UnopDropdown from "unop-react-dropdown";
import Title from './Title.js';
import ListenIn from './ListenIn.js';
import Background from './Background';
import song from "./song.mp3";

class Player extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          play: false,
          pause: true,
        }
        // this.url = "http://streaming.tdiradio.com:8000/song.mp3";
        this.audio = new Audio(song);
      }
    play = () => {
        this.setState({ play: true, pause: false })
          this.audio.play();
        }

        pause = () => {
            this.setState({ play: false, pause: true })
              this.audio.pause();
            }
    render() {
        
      return (
        <>
        <div className="center">
          <h1>How about a little music while you wait?</h1>
          <button onClick={this.play}>Play</button>
      <button onClick={this.pause}>Pause</button>
          <audio src={'song.mp3'} />
          </div>
        </>
      );
    }
  }

  export default Player;