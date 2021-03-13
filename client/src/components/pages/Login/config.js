export const authEndpoint = "https://accounts.spotify.com/authorize";

// Replace with your app's client ID, redirect URI and desired scopes
export const clientId = "717d9cf9ead04d2fb7497fda4d407dfe";
export const redirectUri = 'http://localhost:8888/Callback';
export const scopes = [
    "user-top-read",
    "user-read-currently-playing",
    "user-read-playback-state",
];