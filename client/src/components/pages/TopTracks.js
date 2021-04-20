import React from 'react';
import axios from 'axios';
import { BsPlayFill, BsPauseFill } from 'react-icons/bs';
import { Card } from 'react-bootstrap';
import './Style/Header.css';
import './Banner.css';

export default function TopTracks(props) {

  if (!localStorage.getItem("user")) {
    props.history.push("/")
  }

  const access_token = localStorage.getItem("userToken")
  const [cards, setCards] = React.useState('')
  var loaded = false;

  axios.defaults.headers.common[
    'Authorization'
  ] = `Bearer ${access_token}`;

  const [term, setTerm] = React.useState('long')

  function showLong(){
    loaded = false;
    setTerm('long');
  }
  function showMedium(){
    loaded = false;
    setTerm('medium');
  }

  function showShort(){
    loaded = false;
    setTerm('short');
  }
 
  const [currentUrl, playing, toggle] = useAudio();
  if(!loaded)
    axios.get('https://api.spotify.com/v1/me/top/tracks?time_range='+ term +'_term&limit=50')
      .then((response) => {
        loaded = true;
        let tempCards = []
        let index = 0;
        response.data.items.forEach((item) => {
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
                    <p className="subTitle">-{item.artists[0].name}</p>

                    <audio controls="" name="media">
                      <source src={item.preview_url} type="audio/mpeg"/>
                    </audio>
                  </Card.Body>
                </Card>
            </div>
          )
        })

        setCards(tempCards)
      })
      .catch(error => {
        console.error('There was an error!', error);
    });

  return (
      <div className="background-banner">
                  <table className="artists-table"><tbody>
                    <tr className="artist-title"><th colSpan="2"><h1 className="text-white">Your Top Tracks</h1></th></tr>
                    <tr>
                      <td className="div-titles">
                        <table><tbody>
                          <tr height="150px"><td><a className={(term == "long" ? "active " : "") + "nav-link vertical-title"} onClick={showLong}>All Time</a></td></tr>
                          <tr height="150px"><td><a className={(term == "medium" ? "active " : "") + "nav-link vertical-title"} onClick={showMedium}>Last 6 Months</a></td></tr>
                          <tr height="150px"><td><a className={(term == "short" ? "active " : "") + "nav-link vertical-title"} onClick={showShort}>This Month</a></td></tr>
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
