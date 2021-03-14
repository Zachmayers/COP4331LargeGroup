export const authEndpoint = "https://accounts.spotify.com/authorize";

// Replace with your app's client ID, redirect URI and desired scopes
export const clientId = "717d9cf9ead04d2fb7497fda4d407dfe";
export const redirectUri = 'https://cop4331g15.herokuapp.com/Login';
export const scopes = [
    "user-top-read",
    "user-read-currently-playing",
    "user-read-playback-state",
];
https://accounts.spotify.com/en/authorize?client_id=717d9cf9ead04d2fb7497fda4d407dfe&redirect_uri=listenin.com:%2F%2Fcallback&scope=user-top-read%20user-read-currently-playing%20user-read-playback-state&response_type=token&show_dialog=true