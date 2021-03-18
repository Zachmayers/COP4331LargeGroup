import React from 'react';
import Welcome from './Welcome.js'
import './Banner.css'
import fondo from './fondo.jpg';

function Banner() {
    return (
        <div className="banner" >
            <Welcome />
        </div>
    );
}

export default Banner;