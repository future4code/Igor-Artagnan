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
    background-color: white;
  }
  li{
    list-style: none;
  }
`
const App = () => {

  return <div>
    <GlobalStyle />
    <Router />
  </div>
}

export default App