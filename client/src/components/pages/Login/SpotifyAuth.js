import React from 'react';
import hash from "./Hash";
import GetTokens from "./GetTokens";
import localStorage from 'local-storage';

export default function SpotifyAuth() {
  const authEndpoint = "https://accounts.spotify.com/authorize"
  const redirectUri = 'http://localhost:3000/Login';
  const scopes = [
      "user-top-read",
      "user-read-currently-playing",
      "user-read-playback-state",
  ];
    if (!localStorage.get("userToken")) {
      window.location.href = `${authEndpoint}?client_id=${process.env.REACT_APP_CLIENT_ID}&redirect_uri=${redirectUri}&scope=${scopes.join(
        "%20"
      )}&response_type=token&show_dialog=true`

      let authToken = hash.access_token;
  
      if (authToken) {
        // Set token
        localStorage.set("userToken", authToken)
      }
    } else {
        window.location.href = 'http://localhost:3000/'
    }
}


