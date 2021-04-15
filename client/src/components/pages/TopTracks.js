import React from 'react';
import axios from 'axios';
import { Card } from 'react-bootstrap';
import localStorage from 'local-storage';
import './Style/Header.css';
import './Banner.css';

export default function TopTracks(props) {
  const authToken = localStorage.get("authToken")
  const [cards, setCards] = React.useState('')

  const [term, setTerm] = React.useState('long')

  function showLong(){
    setTerm('long');
  }
  function showMedium(){
    setTerm('medium');
  }

  function showShort(){
    setTerm('short');
  }

  axios.defaults.headers.common[
    'Authorization'
  ] = `Bearer ${authToken}`;

  axios.get('https://api.spotify.com/v1/me/top/artists?time_range='+ term +'_term&limit=50')
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
                  <table className="artists-table"><tbody>
                    <tr className="artist-title"><th colSpan="2"><h1 className="text-white">TOP ARTISTS</h1></th></tr>
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
