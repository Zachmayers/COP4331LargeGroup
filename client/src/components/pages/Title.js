import React from 'react'; 
import { ModalTitle } from 'react-bootstrap';
import './Style/Header.css';
import logo from './Title-img-2.svg';

function Title() { 

  return (
  
      <div className="center"  >
        <img className="title-image" src={logo}/><br />
      </div>

  );
}

export default Title;