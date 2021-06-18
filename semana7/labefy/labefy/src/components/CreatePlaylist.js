import React from 'react'
import axios from 'axios'


export default class CreatePlaylist extends React.Component {

    render(){

        return(
            <div>
                <h2>Create your playlist</h2>
                <input placeholder='Playlist name'/>
                <button>Create!</button>
            </div>
        )
    }

}