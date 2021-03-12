import React from 'react'; 
import { ModalTitle } from 'react-bootstrap';
import './Header.css';

function Title() { 

  return (
      <div class="center">
        <h1 className="titleText">
██╗░░░░░██╗░██████╗████████╗███████╗███╗░░██╗  ██╗███╗░░██╗
██║░░░░░██║██╔════╝╚══██╔══╝██╔════╝████╗░██║  ██║████╗░██║
██║░░░░░██║╚█████╗░░░░██║░░░█████╗░░██╔██╗██║  ██║██╔██╗██║
██║░░░░░██║░╚═══██╗░░░██║░░░██╔══╝░░██║╚████║  ██║██║╚████║
███████╗██║██████╔╝░░░██║░░░███████╗██║░╚███║  ██║██║░╚███║
╚══════╝╚═╝╚═════╝░░░░╚═╝░░░╚══════╝╚═╝░░╚══╝  ╚═╝╚═╝░░╚══╝</h1>
        <b class="blink">.</b>
      </div>
  );
}

export default Title;