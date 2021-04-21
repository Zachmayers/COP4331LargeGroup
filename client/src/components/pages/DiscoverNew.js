import React from 'react';
import axios from 'axios';
import Switch from "react-switch";
import { Formik, ErrorMessage } from 'formik';
import { Container, Card, Col, Form, Row, Button, ButtonGroup, InputGroup } from 'react-bootstrap';
import './Style/Header.css';
import './DiscoverNew.css';

export default function DiscoverNew(props) {

  if (!localStorage.getItem("user")) {
    props.history.push("/")
  }

  const access_token = localStorage.getItem("userToken")
  const [matchCards, setMatchCards] = React.useState('')
  const [suggestedCards, setSuggestedCards] = React.useState('')
  var loaded = false;

  axios.defaults.headers.common[
    'Authorization'
  ] = `Bearer ${access_token}`;

  const [term, setTerm] = React.useState('Artist')
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

  function getResults(value) {
    let type = checked ? 'track' : 'artist'
    let seed = checked ? `seed_tracks=${value}` : `seed_artists=${value}`
    axios.get(`https://api.spotify.com/v1/recommendations?limit=40&market=US&${seed}`)
      .then((response) => {
        let tempCards = []
        let index = 0
        response.data.tracks.forEach((item) => {
          index++;
          tempCards.push(
            <div key={item.id}>
                <div className="card mb-3 seeMore resultCard" onClick={() => getResults(item.id)}>
                  <div className="row no-gutters">
                    <div className="col-md-2 resultPic">
                      <img className="resultPic" src={item.album.images[0].url} class="card-img"/>
                    </div>
                    <div className="col-md-10">
                      <div className="card-body">
                        <h4 className="card-title">{index}.{item.name}</h4>
                        <p className="card-title">{item.artists[0].name}</p>
                      </div>
                    </div>
                  </div>
                </div>
            </div>
          )})
        setSuggestedCards(tempCards)
      })
      .catch(error => {
        console.error('There was an error!', error);
    });
  }

  function searchApiCall(data) {
    setSearchTerm(data)
    let type = checked ? 'track' : 'artist'
    if(!loaded)
    axios.get('https://api.spotify.com/v1/search?q='+ data +'&type='+ type +'&limit=5')
      .then((response) => {
        loaded = true;
        let tempCards = []
        type == "artist"
        ? response.data.artists.items.forEach((item) => {
          if (item.images[0]) {
            tempCards.push(
              <div key={item.id}>
                  <div className="card mb-3 seeMore suggestedCard" onClick={() => getResults(item.id)}>
                    <div className="row no-gutters">
                      <div className="col-md-4">
                        <img src={item.images[0].url} className="searchPic"/>
                      </div>
                      <div className="col-md-8">
                        <div className="card-body">
                          <p className="card-title">{item.name}</p>
                        </div>
                      </div>
                    </div>
                  </div>
              </div>
            )
          }
          })
        : response.data.tracks.items.forEach((item) => {
          tempCards.push(
            <div key={item.id}>
                <div className="card mb-3 seeMore suggestedCard" onClick={() => getResults(item.id)}>
                  <div className="row no-gutters">
                    <div className="col-md-4">
                      <img src={item.album.images[0].url} className="searchPic"/>
                    </div>
                    <div className="col-md-8">
                      <div className="card-body">
                        <p className="card-title">{item.name}</p>
                      </div>
                    </div>
                  </div>
                </div>
            </div>
          )})
        setMatchCards(tempCards)
      })
      .catch(error => {
        console.error('There was an error!', error);
    });
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
        <Switch className="switchComp"
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

  function SearchTry() {
    const [searchTerm, setSearchTerm] = React.useState('')
  
    React.useEffect(() => {
      const delayDebounceFn = setTimeout(() => {
        console.log(searchTerm)
        let searchNew = searchTerm
        searchApiCall(searchNew)
      }, 500)
  
      return () => clearTimeout(delayDebounceFn)
    }, [searchTerm])
  
    return (
      <div>
        <input
          autoFocus
          type='text'
          autoComplete='off'
          className='live-search-field'
          placeholder={`Search By ${term}!`}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
    )
  }

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
                <InputGroup className="discoverSearch">
                    <Form.Group controlId="formSearch">
                        <Form.Control
                            // class="form-control transparent-input"
                            placeholder= {`Search By ${term}!`}
                            type="text"
                            name="search"
                            value={values.search}
                            onChange={handleChange}
                            onBlur={searchApiCall}
                        />
                    </Form.Group>
                    <SwitchButton />
                </InputGroup>
            </Form>
            )}
      </Formik>
    )
  }

  return (
    // <Container fluid>
    //       <Row className="background-banner">
    //           <Col sm={8} className = "col-filter">
    //           <Form className="search-table">
    //               <Form.Row>
    //                 <Col>
    //                   <h1 className="text-white">DISCOVER NEW MUSIC</h1>
    //                 </Col>
    //               </Form.Row>
    //               <Form.Row className="search-row">
    //                 <Search />
    //               </Form.Row>
    //             </Form>
    //               <div className="div-search-suggested">
    //                 {matchCards}
    //               </div>
    //               <div className="div-search-results">
    //                 {suggestedCards}
    //               </div>
    //           </Col>
    //       </Row>
    // </Container>



      <div className="background-banner">
        <div className="search-title">
              <h1 className="text-white">DISCOVER NEW MUSIC</h1>
        </div>
        <div className="search-row">
            <SearchTry />
            <SwitchButton />
        </div>
        <div>
          {matchCards ? <div className="small-text">Select a{term=='Artist' ? "n" : ""} {term}:</div> : ""}
        </div>
        <div className="div-search-suggested">
          {matchCards}
        </div>
        <div className="div-search-results">
          {suggestedCards}
        </div>
      </div> 
      
    );
}
