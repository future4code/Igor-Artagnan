import React from 'react';
import { useHistory } from 'react-router-dom'
import Button from '@material-ui/core/Button';
import LoginForm from './LoginForm'
import { goToSignUp } from '../../routes/coordinator'

import { MainContainer, SignUpButtonContainer } from './styled'

const LoginPage = () => {

  const history = useHistory()


  return <MainContainer>

    <LoginForm />

    <SignUpButtonContainer>
      <Button
        onClick={() => goToSignUp(history)}
        variant="text"
        color="primary"
        disableElevation
        fullWidth
      >
        Cadastre-se
    </Button>


    </SignUpButtonContainer>
  </MainContainer>
}

export default LoginPage