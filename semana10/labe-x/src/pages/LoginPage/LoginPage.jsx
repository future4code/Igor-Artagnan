import React from 'react'
import { MainContainer, InputsContainer, StyledInputs, ButtonDiv } from './styled'
export default function LoginPage() {
    return (
        <MainContainer>
            <h1>Login</h1>
            <InputsContainer>
                <StyledInputs placeholder={'email'} />
                <StyledInputs placeholder={'senha'} type={'password'} />
            </InputsContainer>
            <ButtonDiv>
            <button>Voltar</button>
            <button>Entrar</button>
            </ButtonDiv>
        </MainContainer>
    )
}