import React from 'react'
import ChoosePerson from '../components/ChoosePerson/ChoosePerson'
import Clear from '../components/Clear/Clear'
import GetMatches from '../components/GetMatches/GetMatches'
import GetProfile from '../components/GetProfile/GetProfile'
import {BASE_URL} from '../constantes/url'
import axios from 'axios'
import {
  Container,
  
} from './styled'


function App() {


 const getProfileToChoose = (() =>{
  axios.get(BASE_URL)
  .then((response) => {
      console.log(response.data.profile)
  })
  .catch((error) => {
    alert(error.data)
  })
 })

console.log(BASE_URL)
  return (
    <Container>

      <Clear />
      <GetMatches />
      <GetProfile />
      <div>
        <ChoosePerson />
      </div>
      {getProfileToChoose()}
    </Container>
  )
}



export default App;
