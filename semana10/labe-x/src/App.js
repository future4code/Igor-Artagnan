import React from 'react'
import {createGlobalStyle} from 'styled-components'
import HomePage from './pages/HomePage/HomePage'


function App() {

  const GlobalStyle = createGlobalStyle`
  *{
    margin:0;
    padding: 0;
    box-sizing: border-box;
    
  }`

  return (
    <div >
      <GlobalStyle/>
      <HomePage/>
      
    </div>
  );
}

export default App;
