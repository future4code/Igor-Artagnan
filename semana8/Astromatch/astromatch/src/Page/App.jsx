import React from 'react'
import ChoosePerson from '../components/ChoosePerson/ChoosePerson'
import Clear from '../components/Clear/Clear'
import GetMatches from '../components/GetMatches/GetMatches'
import GetProfile from '../components/GetProfile/GetProfile'
import {Container} from './styled'


function App() {
  return (
    <Container>
      <ChoosePerson/>
      <Clear/>
      <GetMatches/>
      <GetProfile/>
    </Container>
  )
  }



export default App;
