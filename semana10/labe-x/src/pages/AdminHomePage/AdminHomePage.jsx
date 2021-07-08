import React from 'react'
import { useHistory } from 'react-router-dom'
import {useProtectedPage} from '../../hooks/ProtectedPage'
import { MainContainer, StyledButton, ButtonsDiv } from './styled'



export default function AdminHomePage() {

    useProtectedPage()
    
    
    const history = useHistory()

    const goBack = () => {
        history.push('/')
    }

    const renderCreateTripPage = () => {
        history.push("CreateTripPage")
    }

    const renderLoginPage = () => {
        history.push("LoginPage")
    }
    
    return (
        <MainContainer>
            <ButtonsDiv>
                <StyledButton onClick={goBack}>Voltar</StyledButton>
                <StyledButton onClick={renderCreateTripPage}>Criar Viagem</StyledButton>
                <StyledButton onClick={renderLoginPage}>Logout</StyledButton>
            </ButtonsDiv>
        

        </MainContainer>
    )
}