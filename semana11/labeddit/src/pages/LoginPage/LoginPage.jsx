import React from 'react';
import { useHistory } from 'react-router-dom'
import Button from '@material-ui/core/Button';
import LoginForm from './LoginForm'
import { goToSignUp } from '../../routes/coordinator'
import Labeddit from '../../assets/img/labeddit.png'
import { MainContainer, SignUpButtonContainer, LoginContainer } from './styled'
import useUnprotectedPage from '../../hooks/useUnprotectedPage';

const LoginPage = () => {
  useUnprotectedPage()
  const history = useHistory()


  return <MainContainer>
    {/* <img src={Labeddit}/> */}
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