import React from 'react'
import styled from 'styled-components'
import CreatePlaylist from './components/CreatePlaylist'
import Labefy from './components/Labefy'


const MainContainer = styled.div`
display: flex;
flex-direction: column;
margin:auto;
align-items: center;

`


export default class App extends React.Component {

  state = {

    page: 'labefy'

  }

  changePage = () => {
    switch (this.state.page) {
      case "labefy":
        return <Labefy renderCreatePlaylist={this.renderCreatePlaylist} />
      case "playlist":
        return <CreatePlaylist renderLabefy={this.renderLabefy} />  
      default:
        return <div>Page not found :/</div>
    }
  }

  renderCreatePlaylist = () => {
    this.setState({ page: 'playlist' })
  }

  renderLabefy = () => {
    this.setState({ page: 'labefy' })
  }


  render() {

   

    return (
      <MainContainer>

        {this.changePage()}


      </MainContainer>


    )
  }




}