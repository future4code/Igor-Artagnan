import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import axios from 'axios'
import { MainContainer, InputsContainer, StyledInputs, ButtonDiv, InfoDiv, StyledButton } from './styled'
import { BASE_URL } from '../../constants/url'

export default function LoginPage() {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const history = useHistory()

    const goBack = () => {
        history.push("/")
    }


    const onChangeEmail = (e) => {
        setEmail(e.target.value)
        
    }

    const onChangePassword = (e) => {
        setPassword(e.target.value)
    }

    const postLogin = (event) => {
        event.preventDefault();
        const body = {
            email: email,
            password: password
        }

        axios.post(`${BASE_URL}/login`, body)
            .then((response) => {
                localStorage.setItem('token', response.data.token)
                history.push("/AdminHomePage")
            })
            .catch((error) => {
                alert(error.response.data.message)
            })
    }

    return (
        <MainContainer>
            <InfoDiv>
                <h1>Login</h1>
                <form onSubmit={postLogin}>
                <InputsContainer>
                    <StyledInputs
                        placeholder={'email'}
                        value={email}
                        onChange={onChangeEmail}
                        type={'email'}
                        required
                    />
                    <StyledInputs
                        placeholder={'senha'}
                        value={password}
                        onChange={onChangePassword}
                        type={'password'} 
                        required
                        />
                </InputsContainer>
                <ButtonDiv>
                    <StyledButton onClick={goBack}>Voltar</StyledButton>
                    <StyledButton>Entrar</StyledButton>
                </ButtonDiv>
                </form>
            </InfoDiv>
        </MainContainer>
    )
}