import React from 'react'
import axios from 'axios'



export default class App extends React.Component{



  state = {
    footballTeam: {},
    teamName: ""
  }


  onChangeTeamName = (event) => {
    this.setState({teamName: event.target.value})
  }
  
   findTeam= () => {
    
    const url = `https://www.thesportsdb.com/api/v1/json/1/searchteams.php?t=${this.state.teamName}`
    
    axios.get(url) 
    
    .then((response) =>{
      /* console.log(response.data.teams[0]) */
      
      this.setState({footballTeam: response.data.teams[0]})

       this.setState({teamName: ''})
      

    }) 
    
    .catch((error) => {
      alert(error)
    })
  } 

  

  render(){

    console.log(this.state.footballTeam)

   

  const {strAlternate, strCountry, strDescriptionEN, strStadium, intFormedYear} = this.state.footballTeam
    

    return (

      <div>
        <h1>World Footbal Teams Wiki</h1>

        <input 
        placeholder='team name'
        onChange={this.onChangeTeamName}
        value={this.state.teamName}
        
        />
        
        
        
        <button onClick={this.findTeam}>Go</button>
    {strDescriptionEN && 
      
      <div>
          <p>Name:   {strAlternate}</p>
          <p>Country: {strCountry}</p>
          <p>Stadium: {strStadium}</p>
          <p>Since: {intFormedYear}</p>
          <p>Description: {strDescriptionEN} </p>
     
     </div>
    
    }


      </div>

    )
  }
}