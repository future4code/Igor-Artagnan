import React from 'react'
import axios from 'axios'
import PlaylistDetails from './PlaylistDetails'

const url = 'https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists'
const headers = {
    headers: {
        Authorization: 'igor-molina'
    }
}



export default class CreatePlaylist extends React.Component {

    state = {
        playlistName: '',
        playlists: [],
        currentPage: 'allplaylists'
    }

    componentDidMount() {
        

       
    }

    onChangeInputPlaylist = (event) => {
        this.setState({ playlistName: event.target.value })
    }

    getAllPlaylists = () => {
        axios.get(url, headers)

            .then((response) => {
                
                this.setState({ playlists: response.data.result.list })
                

            })

            .catch((error) => {
                alert(error.response.data.message)

            })
    }

    createPlaylist = () => {

        const body = {
            name: this.state.playlistName
        }

        axios.post(url, body, headers)

            .then((reponse) => {
                alert('Playlist create succesfully!')
                this.setState({ playlistName: "" })
                this.getAllPlaylists()

            })

            .catch((error) => {
                alert(error.response.data.message)

            })

    }


    deletePlaylist = (id) => {

        
        
            axios.delete(`https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${id}`, headers) 
        
        .then((response)=>{


            this.getAllPlaylists()

        }) 
        
        .catch((error)=>{
            alert(error.response.data)

        })

    
}

    renderCurrentPage = () => {
        if (this.state.currentPage === 'playlistdetails'){
            return <PlaylistDetails/>
        }else if (this.state.currentPage === 'allplaylists') {
            return  this.getAllPlaylists()
        }
    }

    onClickRenderAllPlaylists = () => {
        this.setState({currentPage: 'allplaylists'})
    }
   
    onClickRenderPlaylistDetail = () => {
        this.setState({currentPage: "playlistdetails"})
    }



    render() {

        const mapedPlaylists = this.state.playlists.map((playlist) => {
            return <li key={playlist.id}>
                  
                {playlist.name}
                <button onClick={() => this.deletePlaylist(playlist.id)}>Delete</button>
                <button key={playlist.id} onClick={this.onClickRenderPlaylistDetail}>Playlist Details</button>
                
                

            </li>

        })




        return (
            <div>
                <button onClick={this.props.renderLabefy}>Main Page</button>

                <h2>Create your playlist</h2>
                <input
                    placeholder='Playlist name'
                    value={this.state.playlistName}
                    onChange={this.onChangeInputPlaylist}


                />
                <button onClick={this.createPlaylist}>Create!</button>
                
               {/*  <h2>Your playlists:</h2> */}
                {mapedPlaylists}
                
                <button onClick={this.onClickRenderAllPlaylists}>My Playlists</button>
                {this.renderCurrentPage()}
            </div>
        )
    }

}
