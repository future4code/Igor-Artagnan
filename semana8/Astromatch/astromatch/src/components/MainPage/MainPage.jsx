import React from 'react'
import Clear from '../Clear/Clear'
import GetProfile from '../GetProfile/GetProfile'
import {
    Container,
  
  } from './styled'

function MainPage(props) {

   
   
     return (
       <Container>
   
         <Clear />
         <button onClick={props.renderMatches}>Matches</button>
         
         <GetProfile />
         
      
       </Container>
     )
   }
   
   
   
   export default MainPage;
   