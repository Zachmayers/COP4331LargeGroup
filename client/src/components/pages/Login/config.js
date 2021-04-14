export const authEndpoint = "https://accounts.spotify.com/authorize";

// Replace with your app's client ID, redirect URI and desired scopes
export const clientId = "76c65c0c930f4f28b28931ca1cd6fa99";
export const redirectUri = 'http://localhost:3000/Login';
export const scopes = [
    "user-top-read",
    "user-read-currently-playing",
    "user-read-playback-state",
];
