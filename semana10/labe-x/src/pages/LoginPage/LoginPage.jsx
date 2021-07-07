import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { MainContainer, InputsContainer, StyledInputs, ButtonDiv, InfoDiv, StyledButton } from './styled'

export default function LoginPage() {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const history = useHistory()

    const goBack = () => {
        history.goBack()
    }

    const renderAdminHomePage = () => {
        history.push("AdminHomePage")
    }

    const onChangeEmail = (e) => {
        setEmail(e.target.value)
    }

    const onChangePassword = (e) => {
        setPassword(e.target.value)
    }

    return (
        <MainContainer>
            <InfoDiv>
                <h1>Login</h1>
                <InputsContainer>
                    <StyledInputs
                        placeholder={'email'}
                        value={email}
                        onChange={onChangeEmail}
                    />
                    <StyledInputs
                        placeholder={'senha'}
                        value={password}
                        onChange={onChangePassword}
                        type={'password'} />
                </InputsContainer>
                <ButtonDiv>
                    <StyledButton onClick={goBack}>Voltar</StyledButton>
                    <StyledButton onClick={renderAdminHomePage}>Entrar</StyledButton>
                </ButtonDiv>
            </InfoDiv>
        </MainContainer>
    )
}