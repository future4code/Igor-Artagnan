import React from 'react'
import { useHistory } from 'react-router-dom'
import { MainContainer, InputsContainer, StyledInputs, ButtonDiv } from './styled'

export default function LoginPage() {
    
    const history = useHistory()

    const goBack = () => {
        history.goBack()
    }
    return (
        <MainContainer>
            <h1>Login</h1>
            <InputsContainer>
                <StyledInputs placeholder={'email'} />
                <StyledInputs placeholder={'senha'} type={'password'} />
            </InputsContainer>
            <ButtonDiv>
                <button onClick={goBack}>Voltar</button>
                <button>Entrar</button>
            </ButtonDiv>
        </MainContainer>
    )
}