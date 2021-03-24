import React, {useState} from 'react';
import Welcome from './Welcome.js'
import Welcome1 from './Welcome1.jsx'
import Title from './Title.js';
import './Banner.css'
import fondo from './fondo.jpg';

function Banner() {

    return (
        <div className="banner" >
            {/* <Title /> */}
            <Welcome1 />
        </div>
    );
}

export default Banner;