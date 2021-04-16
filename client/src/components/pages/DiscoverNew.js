import React from 'react';
import axios from 'axios';
import { Card } from 'react-bootstrap';
import './Style/Header.css';
import './Banner.css';
import localStorage from 'local-storage';

export default function DiscoverNew(props) {
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
                <Card.Img variant="top" src={item.images[1].url} />
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
                <table ><tbody>
                  <tr ><th><h1 className="text-white">DISCOVER NEW MUSIC</h1></th></tr>
                  
                  </tbody></table>
      </div>
    );
}
