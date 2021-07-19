import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

const LoginPage = () => {

  return <div>
    <form>
      <TextField
        id="standard-multiline-flexible"
        label="Email"
        multiline
        maxRows={4}

      />

      <TextField
        id="standard-multiline-flexible"
        label="Senha"
        type="password"
        multiline
        maxRows={4}

      />

      <Button variant="contained" color="primary" disableElevation>
        Login
    </Button>
    </form>

    <Button variant="contained" color="primary" disableElevation>
      Cadastre-se
    </Button>
  </div>
}

export default LoginPage