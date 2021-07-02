import React, { useState } from 'react'
import Clear from '../components/Clear/Clear'
import GetMatches from '../components/GetMatches/GetMatches'
import MainPage from '../components/MainPage/MainPage'
import {createGlobalStyle} from 'styled-components'
import {
  Container,
  Logo,
} from './styled'


function App() {
  const GlobalStyle = createGlobalStyle`
  *{
    margin:0;
    padding: 0;
    box-sizing: border-box;
  }

  body{
    background-color: #fffafa;
  }
  `
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
      <Logo>Astromatch</Logo>
      <Container>
        
        
        
        {changePage()}
        
      </Container>
      
     
      <Clear />
    </div>
  )
}

export default App;
