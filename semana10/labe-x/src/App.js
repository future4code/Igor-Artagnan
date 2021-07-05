import React from 'react'
import ApplicationFormPage from './pages/ApplicationFormPage/ApplicationFormPage'
import {createGlobalStyle} from 'styled-components'


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
      {/* <AdminHomePage/> */}
      <ApplicationFormPage/>
      
    </div>
  );
}

export default App;
