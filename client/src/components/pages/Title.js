import React from 'react'; 
import { ModalTitle } from 'react-bootstrap';
import './Header.css';
import logo from './Title-img-1.svg';

function Title() { 

  return (
      <div class="center">
        <img  src={logo}/>
        <b class="blink">.</b>
      </div>
  );
}

export default Title;