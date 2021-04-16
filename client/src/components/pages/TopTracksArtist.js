import React from 'react';
import axios from 'axios';
import { TiArrowBack} from 'react-icons/ti';
import { BsPlayFill, BsPauseFill } from 'react-icons/bs';
import { Card } from 'react-bootstrap';
import { useHistory } from "react-router-dom";
import './Style/Header.css';
import './Banner.css';

export default function TopTracksArtist(props) {
  const [cards, setCards] = React.useState('')
  const [artistName, setArtistName] = React.useState('')


  const [currentUrl, playing, toggle] = useAudio();
  if (!artistName)
  axios.get('https://api.spotify.com/v1/artists/'+ props.match.params.id + '/top-tracks?market=US')
    .then((response) => {
      let tempCards = []
      let index = 0;
      response.data.tracks.forEach((item) => {
        index++;
        tempCards.push(
          <div key={item.id}>
              <Card className="artist-card">
                <Card.Img className="songImage" variant="top" src={item.album.images[1].url} />
                <Card.ImgOverlay>
                {item.preview_url ?
                    <button className="song-player" onClick={()=>toggle(item.preview_url)}>
                      <h1 className="icon-size">{playing && item.preview_url == currentUrl ? <BsPauseFill className="icon-white"/> : <BsPlayFill className="icon-white"/>}</h1>
                    </button>
                    : ""}
                </Card.ImgOverlay>
                <Card.Body className="cardInfo">
                <span>{index}.{item.name}<br/></span>

                <audio controls="" name="media">
                  <source src={item.preview_url} type="audio/mpeg"/>
                </audio>
                </Card.Body>
              </Card>
          </div>
        )
      })
      setArtistName(props.match.params.name)
      setCards(tempCards)
    })
    .catch(error => {
      console.error('There was an error!', error);
  });

  const history = useHistory()

  const goBack = () => {
    history.goBack()
  }
  
  return (
      <div className="background-banner">
                <table className="artists-table"><tbody>
                  <tr className="artist-title"><th colSpan="2"><h1 className="text-white">{artistName}'s Top Tracks</h1></th></tr>
                  <tr>
                    <td className="div-titles ">
                      <table><tbody>
                        <tr><td><button className="vertical-btn" onClick={goBack}> <TiArrowBack className="icon-white"/> </button></td></tr>
                      
                      </tbody></table>
                    </td>
                    <td className="div-top-results">
                      {cards}
                    </td>
                  </tr>
                </tbody></table>
      </div>
    );
}

const useAudio = () => {
  const [currentUrl, setUrl] = React.useState("");
  const [audio, setAudio] = React.useState(null);
  const [playing, setPlaying] = React.useState(false);

  const toggle = (url) => {
    if (currentUrl != url) {      
      setPlaying(false)
      setUrl(url);
      setAudio(new Audio(url));
    }
    setPlaying(!playing)
  };

  React.useEffect(() => {
      if (currentUrl) 
        playing ? audio.play() : audio.pause();
      if (playing) 
          audio.addEventListener('ended', () => setPlaying(false));
    },
    [playing]
  );



  return [currentUrl, playing, toggle];
};