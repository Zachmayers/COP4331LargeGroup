import React from 'react';
import axios from 'axios';
import Switch from "react-switch";
import { Formik, ErrorMessage } from 'formik';
import { Card, Col, Form, Button, ButtonGroup, InputGroup } from 'react-bootstrap';
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

  const [term, setTerm] = React.useState('Song')
  const [searchTerm, setSearchTerm] = React.useState('')
  const [checked, setChecked] = React.useState(false);

  function showArtist(){
    loaded = false;
    setTerm('Artist');
  }

  function showSong(){
    loaded = false;
    setTerm('Song');
  }

  function artistTop(id, name){
    props.history.push(`/TopTracksArtist/${id}/${name}`)
  }

  function searchApiCall(data) {
    setSearchTerm(data.search)
    // let type = checked ? 
    // axios.get(`https://api.spotify.com/v1/search?q=${data.search}&type=${}`)
  }

  const SwitchButton = () => {
    
    const handleChange = nextChecked => {
      setChecked(nextChecked);
      if (checked) {
        showArtist()
      } else {
        showSong()
      }
    };
  
    return (
        <div className="switch-button">
          Artist
        <Switch
          onChange={handleChange}
          checked={checked}
          onColor="#1ecd97"
          offColor="#1ecd97"
          handleDiameter={30}
          uncheckedIcon={false}
          checkedIcon={false}
          boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
          activeBoxShadow="0px 0px 1px 10px rgba(0, 0, 0, 0.2)"
          height={20}
          width={48}
        />
        Song
        </div>
    );
  };

  function Search() {
    return (
      <Formik
      onBlur={searchApiCall}
      initialValues={{
          search: ''
      }}
      >
        {({
                handleSubmit,
                handleChange,
                handleBlur,
                values,
                touched,
                isValid,
                errors,
            }) => (
              <Form noValidate>
                <InputGroup>
                    <Form.Group controlId="formSearch">
                        <Form.Control
                            // class="form-control transparent-input"
                            placeholder= {`Search By ${term}!`}
                            type="text"
                            name="search"
                            value={values.search}
                            onChange={handleChange}
                            onBlur={handleBlur}
                        />
                    </Form.Group>
                    <SwitchButton />
                </InputGroup>
            </Form>
            )}
      </Formik>
    )
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
        <table className="search-table"><tbody>
          <tr><th><h1 className="text-white">DISCOVER NEW MUSIC</h1></th></tr>
          <tr className="search-row"><Search /></tr>
        </tbody></table>
      </div>
    );
}

