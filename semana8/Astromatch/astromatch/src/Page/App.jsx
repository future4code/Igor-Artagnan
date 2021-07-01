import React/* , {useState} */ from 'react'
import Clear from '../components/Clear/Clear'
import GetMatches from '../components/GetMatches/GetMatches'
import GetProfile from '../components/GetProfile/GetProfile'

import {
  Container,

} from './styled'


function App() {

 /* const [page, setPage] = useState('app')

  const changePAge = () => {
     switch (page){
       
     }
  }
 */

  return (
    <Container>

      <Clear />
      <button>Matches</button>
      {/* <GetMatches /> */}
      <GetProfile />
      
   
    </Container>
  )
}



export default App;
