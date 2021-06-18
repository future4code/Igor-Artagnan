import React from 'react'
import styled from 'styled-components'
import CreatePlaylist from './components/CreatePlaylist'

const MainContainer = styled.div`
display: flex;
flex-direction: column;
margin:auto;
align-items: center;

`


export default class Labefy extends React.Component {

  state = {

    page: 'playlist'

  }

  changePage = () => {
    switch (this.state.page) {
      case "labefy":
        return <Labefy />
      case "playlist":
        return <CreatePlaylist />
      default:
        return <div>Page not found :/</div>
    }
  }

  renderCreatePlaylist = () => {
    this.setState({page: 'playlist'})
  }

  render() {

    return (
      <MainContainer>

        <h1>Labefy</h1>
        <button onClick={this.renderCreatePlaylist}>Create Playlist</button>
        <button>Your Playlists</button>

        {this.changePage}



      </MainContainer>


    )
  }




}