import React from 'react'
import { MainContainer, InputsContainer, StyledInputs } from './styled'
export default function LoginPage() {
    return (
        <MainContainer>
            <h1>Login</h1>
            <InputsContainer>
                <StyledInputs placeholder={'email'} />
                <StyledInputs placeholder={'senha'} type={'password'} />
            </InputsContainer>
        </MainContainer>
    )
}