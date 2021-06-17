import React from 'react'
import axios from 'axios'



export default class App extends React.Component{



  state = {
    footballTeam: {}
  }

  
   findTeam= () => {
    
    const url = `https://www.thesportsdb.com/api/v1/json/1/searchteams.php?t=Corinthians`
    
    axios.get(url) 
    
    .then((response) =>{
      /* console.log(response.data.teams[0]) */
      
      this.setState({footballTeam: response.data.teams[0]})

       console.log('TIME',this.state.footballTeam) 
      

    }) 
    
    .catch((error) => {
      alert(error)
    })
  } 

  

  render(){

   this.findTeam() 

  const {strAlternate, strCountry, strDescriptionEN, strStadium, intFormedYear} = this.state.footballTeam
    

    return (

      <div>
        <h1>World Footbal Teams Library</h1>

        <input placeholder='team name'/>
        
        
        
        <button onClick={this.findTeam}>Go</button>

          <p>Name: {strAlternate}</p>
          <p>Country: {strCountry}</p>
          <p>Stadium: {strStadium}</p>
          <p>Since: {intFormedYear}</p>
          <p>Description: {strDescriptionEN} </p>


      </div>

    )
  }
}