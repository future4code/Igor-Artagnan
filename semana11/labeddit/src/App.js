import React from 'react';
import Router from './routes/Router'
import { createGlobalStyle } from 'styled-components'


const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    
  }
  body{
    background-color: #2b2b2c;
  }
  li{
    list-style: none;
  }

  h2, h3, h5, h6, p{
    color: white;
  }
`
const App = () => {

  return <div>
    <GlobalStyle />
    <Router />
  </div>
}

export default App