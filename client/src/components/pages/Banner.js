import React, {useState} from 'react';
import Welcome from './Welcome.js'
import Title from './Title.js';
import './Banner.css'
import Welcome1 from './Welcome1';
import fondo from './fondo.jpg';

function Banner() {

    return (
        <div className="banner" >
            {/* <Title /> */}
            <Welcome1 />
            {/* <Welcome /> */}
        </div>
    );
}

export default Banner;