import React from 'react';
import axios from 'axios';
import { Card } from 'react-bootstrap';
import './Style/Header.css';
import './Banner.css';
import localStorage from 'local-storage';
import TopTracksArtist from './TopTracksArtist';

export default function TopArtists(props) {
  const access_token = localStorage.get("userToken")
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

  function artistTop(id, name){
    props.history.push(`/TopTracksArtist/${id}/${name}`)
  }

  if(!loaded)
  axios.get('https://api.spotify.com/v1/me/top/artists?time_range='+ term +'_term&limit=50')
    .then((response) => {
      loaded = true;
      let tempCards = []
      let index = 0;
      response.data.items.forEach((item) => {
        index++;
        tempCards.push(
          <div key={item.id}>
              <Card className="artist-card seeMore" onClick={() => artistTop(item.id, item.name)}>
                <Card.Img className="songImage" variant="top" src={item.images[1].url} />
                <Card.Body>
                  <span>{index}.{item.name}</span>
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
                  <tr className="artist-title"><th colSpan="2"><h1 className="text-white">Your Top Artists</h1></th></tr>
                  <tr>
                    <td className="div-titles">
                      <table><tbody>
                        <tr height="150px"><td><a className={(term == "long" ? "active " : "") + "nav-link vertical-title"} onClick={showLong}>All Time</a></td></tr>
                        <tr height="150px"><td><a className={(term == "short" ? "active " : "") + "nav-link vertical-title"} onClick={showShort}>This Month</a></td></tr>
                        <tr height="150px"><td><a className={(term == "medium" ? "active " : "") + "nav-link vertical-title"} onClick={showMedium}>Last 6 Months</a></td></tr>
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
