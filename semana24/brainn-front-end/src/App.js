import HomePage from './pages/HomePage/HomePage'
import { createGlobalStyle } from 'styled-components'


function App() {


  const GlobalStyle = createGlobalStyle`
   @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@100&display=swap');
    * {
        margin: 0;
        padding: 0;
        font-family: 'Montserrat', sans-serif;
        box-sizing: border-box;
        text-decoration: none;
        list-style: none;

        h1, h2, h3, h4{
          color: white;
        }
    }`

  return (
    <div>
      <GlobalStyle />
      <HomePage />
    </div>
  );
}

export default App;
