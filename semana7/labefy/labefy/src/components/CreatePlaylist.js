import React from 'react'
import axios from 'axios'


export default class CreatePlaylist extends React.Component {

    state = {
        playlistName: ''
    }

    

    render(){

        return(
            <div>
                    <button onClick={this.props.renderLabefy}>Main Page</button>

                <h2>Create your playlist</h2>
                <input placeholder='Playlist name'/>
                <button>Create!</button>
            </div>
        )
    }

}