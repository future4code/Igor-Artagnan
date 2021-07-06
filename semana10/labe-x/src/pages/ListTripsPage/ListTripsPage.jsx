import React from 'react'
import { useHistory } from 'react-router-dom'
import { MainContainer } from './styled'

export default function ListTripsPage() {
    const history = useHistory()

    const renderMainPage = () => {
        history.goBack()
    }

    const renderApplicationFormPage = () => {
        history.push("ApplicationFormPage")
    }
    return (
        <MainContainer>
            ListTripsPage
            <button onClick={renderMainPage}>Voltar</button>
            <button onClick={renderApplicationFormPage}>Inscreva-se</button>

        </MainContainer>
    )
}