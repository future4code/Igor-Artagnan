import React from 'react'
import axios from 'axios'

const headers = {
    headers: {
        Authorization: 'igor-molina'
    }
}

const url = "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/:playlistId/tracks"



export default class PlaylistDetails extends React.Component {

    state = {
        tracks: []
    }

    getPlaylistTracks = () => {
        
        axios.get(url, headers) 
        
        .then 
        
        .catch()
    }

    render(){

        return(

            <div>
                <h2>Add a song: </h2>
                <input placeholder="song name"/>
                <input placeholder='artist'/>
                <input placeholder="url"/>
                <button>Done</button>

                
            </div>
        )
    }
}