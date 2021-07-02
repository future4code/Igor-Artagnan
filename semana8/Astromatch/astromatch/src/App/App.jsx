import React, { useState } from 'react'
import Clear from '../components/Clear/Clear'
import GetMatches from '../components/GetMatches/GetMatches'
import MainPage from '../components/MainPage/MainPage'
import {
  Container,

} from './styled'


function App() {

  const [page, setPage] = useState('main')

  const changePage = () => {
    switch (page) {
      case 'main':
        return <MainPage
          renderMatches={renderMatches}
        />
      case 'matches':
        return <GetMatches
          renderMain={renderMain}
        />
      default:
        return <div>Página não encontrada :/</div>

    }
  }

  const renderMatches = () => {
    setPage('matches')
  }

  const renderMain = () => {
    setPage('main')
  }

  return (
    <div>
      <Container>
        
        <h1>Astromatch</h1>
        
        {changePage()}

      </Container>
      
      <Clear />
    
    </div>
  )
}

export default App;
