import React from 'react';
import hash from "./Hash";
import GetTokens from "./GetTokens";
import { authEndpoint, clientId, redirectUri, scopes } from './config';

export default function SpotifyAuth(props) {

    if (!localStorage.getItem("user")) {
      props.history.push('/')
    }

    window.location.href = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join(
      "%20"
    )}&response_type=token&show_dialog=true`

    let authToken = hash.access_token;

    if (authToken) {
      // Set token
      localStorage.setItem("userToken", authToken)
      // window.location.href = 'http://localhost:3000/'
      window.location.href = 'https://listenin.us/TopTracks'
    }
}

// export default function SpotifyAuth() {
//   if (!localStorage.getItem("userToken")) {
//     window.location.href = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join(
//       "%20"
//     )}&response_type=token&show_dialog=true`

//     let authToken = hash.access_token;

//     if (authToken) {
//       // Set token
//       localStorage.setItem("userToken", authToken)
//     }
//   } else {
//       window.location.href = 'http://localhost:3000/'
//   }
// }


