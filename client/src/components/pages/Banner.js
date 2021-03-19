import React, {useState} from 'react';
import Welcome from './Welcome.js'
import Title from './Title.js';
import './Banner.css'
import fondo from './fondo.jpg';

function Banner() {

    return (
        <div className="banner" >
            <Title />
            <Welcome />
        </div>
    );
}

export default Banner;