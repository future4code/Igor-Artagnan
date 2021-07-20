import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

import { MainContainer, InputsContainer } from './styled'

const LoginPage = () => {

  return <MainContainer>
    
      <form>
        <InputsContainer>
          <TextField
            id="standard-multiline-flexible"
            label="Email"
            multiline
            maxRows={4}
            required
          />

          <TextField
            id="standard-multiline-flexible"
            label="Senha"
            type="password"
            multiline
            maxRows={4}
            required
          />

        </InputsContainer>

        <Button variant="contained" color="primary" disableElevation>
          Login
    </Button>
      </form>
   
    <Button variant="contained" color="primary" disableElevation>
      Cadastre-se
    </Button>
  </MainContainer>
}

export default LoginPage