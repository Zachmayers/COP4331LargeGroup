import React, {useState} from 'react';
import Welcome from './Welcome'
import Welcome1 from './Welcome1'
import Title from './Title.js';
import './Banner.css'
import fondo from './fondo.jpg';

function Banner(props) {

    return (
        <div className="banner background-banner" >
            {/* <Title /> */}
            <Welcome1 user={props.user} setUser={props.setUser}/>
        </div>
    );
}

export default Banner;