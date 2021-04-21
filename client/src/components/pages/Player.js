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
        this.url = "http://streaming.tdiradio.com:8000/song.mp3";
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
        
       
          <p>To yourself. To your friends. To something new.</p>
          <p>See your top Tracks and artist, all at the click of a button.</p>
          <p>Sometimes, the music you're looking for is the music you forgot you liked.</p>
          <p>Or a song you've never seen before</p>
          <p>Make an account and experience it for yourself, or just stick around and play with the floating shapes</p>
          <p>Either way, make sure you Listen in to whats around you, you might notice something new.</p>

          <h3>How about a little music while you're here'?</h3>
          <button onClick={this.play}>Play</button>
        <button onClick={this.pause}>Pause</button>
          <audio src={this.audio} />
        
          </div>
        </>
      );
    }
  }

  export default Player;