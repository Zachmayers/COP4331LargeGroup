import React from 'react'; 
import { ModalTitle } from 'react-bootstrap';
import './Style/Header.css';
import logo from './Title-img-1.svg';

function Title() { 

  return (
  
      <div className="center"  >
        <img src={logo}/><br />
      </div>

  );
}

export default Title;