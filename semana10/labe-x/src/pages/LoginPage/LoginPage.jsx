import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import axios from 'axios'
import useForm from '../../hooks/UseForm'
import { BASE_URL } from '../../constants/url'
import { MainContainer, InputsContainer, StyledInputs, ButtonDiv, InfoDiv, StyledButton } from './styled'

export default function LoginPage() {

    const { form, onChange, cleanFields } = useForm({ email: '', password: '' })


    const history = useHistory()

    const goBack = () => {
        history.push("/")
    }


    const postLogin = (event) => {
        event.preventDefault();


        axios.post(`${BASE_URL}/login`, form)
            .then((response) => {
                localStorage.setItem('token', response.data.token)
                history.push("/AdminHomePage")
                cleanFields()
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
                            name={'email'}
                            placeholder={'email'}
                            value={form.email}
                            onChange={onChange}
                            type={'email'}
                            required
                        />
                        <StyledInputs
                            name={'password'}
                            placeholder={'senha'}
                            value={form.password}
                            onChange={onChange}
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