import React from 'react'
import { MainContainer } from './styled'
import { useHistory } from 'react-router-dom'


export default function AdminHomePage() {
    const history = useHistory()

    const goBack = () => {
        history.goBack()
    }

    const renderCreateTripPage = () => {
        history.push("CreateTripPage")
    }

    const renderLoginPage = () =>{
        history.push("LoginPage")
    }

    return (
        <MainContainer>
            <button onClick={goBack}>Voltar</button>
            <button onClick={renderCreateTripPage}>Criar Viagem</button>
            <button onClick={renderLoginPage}>Logout</button>
        AdminHomePage

        </MainContainer>
    )
}