import React, { useState, useEffect, useContext } from 'react';
import './Banner.css';
import { SpotifyApiContext } from 'react-spotify-api';
import { Artist } from 'react-spotify-api'
import { ArtistAlbums } from 'react-spotify-api'
import { useArtist } from 'react-spotify-api'
import Card from 'react-bootstrap/Card'



function TopArtists() {  

    return(
            <div className="background-banner">
                <table className="artists-table">
                    <td className="div-titles">
                        <tr height="200px"><p className="vertical-title">All Time</p></tr>
                        <tr height="200px"><p className="vertical-title">This Month</p></tr>
                        <tr height="200px"><p className="vertical-title">Last 6 Months</p></tr>
                    </td>
                    <td className="div-top-results">
                       <h1 className="navbar-brand text-white">Top Artists</h1>
                       <ArtistInfo/>
                        
                    </td>
                </table>
                
            </div>
    );
}

function ArtistInfo() {
    //const { data, loading, error } = useArtist("1XpDYCrUJnvCo9Ez6yeMWh")
    return(
        <div>
            <Card className="artist-card">
            <Card.Img variant="top" src="https://i.scdn.co/image/848b92c2487efb37ba4c75bc25a242c7b2785440" />
            <Card.Body>
                {/* <Card.Title>{data.artist.name}</Card.Title> */}
            </Card.Body>
            </Card>
        </div>
    );
}

export default TopArtists;