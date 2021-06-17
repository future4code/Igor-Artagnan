import React from 'react'
import axios from 'axios'
import styled from 'styled-components'

const MainContainer = styled.div`
display: flex;
flex-direction: column;
align-items: center;
width: 500px;
margin:auto;
padding:20px;
background-color: #2f5d86;
`

const StyledInput = styled.input`
height: 30x;

`

const InfoDiv = styled.div`
background-color: #c1c7cc;
padding: 22px;
margin: 33px;


`

const StyledButton = styled.button`

    margin-top: 9px;
    width: 53px;
    padding: 3px;
    border-radius: 20px;
`
const Body = styled.div`
background-color: black;

`


export default class App extends React.Component {



  state = {
    footballTeam: {},
    teamName: ""
  }


  onChangeTeamName = (event) => {
    this.setState({ teamName: event.target.value })
  }

  findTeam = () => {

    const url = `https://www.thesportsdb.com/api/v1/json/1/searchteams.php?t=${this.state.teamName}`

    axios.get(url)

      .then((response) => {
        /* console.log(response.data.teams[0]) */

        this.setState({ footballTeam: response.data.teams[0] })

        this.setState({ teamName: '' })


      })

      .catch((error) => {
        alert(error)
      })
  }



  render() {

    console.log(this.state.footballTeam)



    const { strTeam, strCountry, strDescriptionEN, strStadium, intFormedYear } = this.state.footballTeam


    return (





      <Body>

        <MainContainer>

          <h1>World Footbal Teams Wiki</h1>

          <StyledInput
            placeholder='team name'
            onChange={this.onChangeTeamName}
            value={this.state.teamName}

          />



          <StyledButton onClick={this.findTeam}>Go</StyledButton>

        </MainContainer>
        {strDescriptionEN &&

          <InfoDiv>
            <h3>Name:   {strTeam}</h3>
            <h3>Country:</h3>
            <p>{strCountry} </p>
            <h3>Stadium:</h3>
            <p>{strStadium}</p>
            <h3>Since: </h3>
            <p>{intFormedYear}</p>
            <h3>Description:</h3>
            {strDescriptionEN}

          </InfoDiv>

        }




      </Body>

    )
  }
}