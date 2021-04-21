import React from 'react'; 
import axios from 'axios';
import { Card } from 'react-bootstrap';
import Particles from "react-tsparticles";
import './Style/Header.css';
import './Banner.css';
import Banner from './Banner';
import Title from './Title.js';
import ListenIn from './ListenIn.js';
import Background from './Background';
import Player from './Player';
import TopTracks from './TopTracks';

function Home(props) { 
  // if (props.user.id) {
	// 	props.history.push('/TopTracks')
	// }
  if (localStorage.getItem("user")) {
    props.history.push('/TopTracks')
  }

  return (
    <div>
      <Banner user={props.user} setUser={props.setUser}/>
    </div>
  );
}

/* function TopPublic(){

  const access_token = rage.get("userToken")
  const [cards, setCards] = React.useState('')

  axios.defaults.headers.common[
    'Authorization'
  ] = `Bearer ${access_token}`;

  
  axios.get('https://api.spotify.com/v1/playlists/37i9dQZEVXbMDoHDwVN2tF')
    .then((response) => {
      let tempCards = []
      let index = 0;
      response.data.tracks.items.forEach((item) => {
        index++;
        tempCards.push(
          <div key={item.track.id}>
              <Card className="artist-card" >
                <Card.Img variant="top" src={item.track.album.images[1].url} />
                <Card.Body className="cardInfo">
                <span>{index}.{item.track.name}</span><br/>
                  <p className="subTitle">-{item.track.artists[0].name}</p>
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

  return(
  <div className="topPublic">
    <h1 className="text-white">Today's Top Hits</h1> <br/>
    {cards}
  </div>
  );
} */

export default Home; 