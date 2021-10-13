import HomePage from './pages/HomePage/HomePage'
import { createGlobalStyle } from 'styled-components'

function App() {

  const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
   }
`

  return (
    <div>
      {/* <GlobalStyle /> */}
      <HomePage />
    </div>
  );
}

export default App;
