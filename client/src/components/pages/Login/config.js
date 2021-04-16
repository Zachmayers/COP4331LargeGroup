export const authEndpoint = "https://accounts.spotify.com/authorize";

// Replace with your app's client ID, redirect URI and desired scopes
export const clientId = "f8b6892b26ed41e08b23c7c8b086a91c";
export const redirectUri = 'http://localhost:3000/Login';
export const scopes = [
    "user-top-read",
    "user-read-currently-playing",
    "user-read-playback-state",
];
