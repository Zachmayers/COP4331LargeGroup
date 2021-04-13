import React from 'react';
import axios from 'axios';
import { Card } from 'react-bootstrap';
import localStorage from 'local-storage';
import './Style/Header.css';
import './Banner.css';
import localStorage from 'local-storage'

export default function TopTracks(props) {
  const access_token = localStorage.get("userToken")
  const [cards, setCards] = React.useState('')

  axios.defaults.headers.common[
    'Authorization'
  ] = `Bearer ${access_token}`;

  axios.get('https://api.spotify.com/v1/me/top/artists?time_range=long_term&limit=50')
        .then((response) => {
          let tempCards = []
          response.data.items.forEach((item) => {
            tempCards.push(
              <div>
                  <Card className="artist-card">
                    <Card.Img variant="top" src={item.images[1].url} />
                    <Card.Body>
                      {item.name}
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
                <table className="artists-table">
                  <tr className="artist-title"><h1 className="text-white">TOP ARTISTS</h1></tr>
                  <tr>
                    <td className="div-titles">
                        <tr height="150px"><NavLink exact className="nav-link vertical-title" activeClassName="active" to="/TopTracks">All Time</NavLink></tr>
                        <tr height="150px"><NavLink exact className="nav-link vertical-title" activeClassName="active" to="/TopTracks">This Month</NavLink></tr>
                        <tr height="150px"><NavLink exact className="nav-link vertical-title" activeClassName="active" to="/TopTracks">Last 6 Months</NavLink></tr>
                    </td>
                    <td className="div-top-results">
                      {cards}
                    </td>
                  </tr>
                </table>
      </div>
    );
}

function LongTerm(){

    return(
      <div></div>
    );
   
}

function MediumTerm(){

  return(
    <div></div>
  );
 
}

function ShortTerm(){

  return(
    <div></div>
  );
 
}
