import React from 'react';
import axios from 'axios';
import { redirectUri } from './config';

export default function GetToken() {
    const authToken = localStorage.getItem("authToken")
    const code = localStorage.getItem("authCode")
    if (authToken) {
        axios('https://accounts.spotify.com/api/token', {
            headers: {
                'Content-Type' : 'application/x-www-form-urlencoded',
                'Authorization' : 'Basic ' + btoa(process.env.REACT_APP_CLIENT_ID + ':' + process.env.REACT_APP_SPOTIFY_SECRET)      
            },
            data: ['grant_type=authorization_code',
                    `code=${code}`,
                    `redirect_uri=${redirectUri}`],
            method: 'POST'
        })
        .then(tokenResponse => {
            console.log(tokenResponse)   
        })
    }
}