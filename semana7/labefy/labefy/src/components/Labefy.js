import React from 'react'
import styled from 'styled-components'


const MainContainer = styled.div`
display: flex;
flex-direction: column;
margin:auto;
align-items: center;

`


export default class App extends React.Component {


    render() {

        return (
            <MainContainer>

                <h1>Labefy</h1>
                <button onClick={this.props.renderCreatePlaylist}>Create Playlist</button>
                <button>Your Playlists</button>

                {this.changePage}



            </MainContainer>


        )
    }




}