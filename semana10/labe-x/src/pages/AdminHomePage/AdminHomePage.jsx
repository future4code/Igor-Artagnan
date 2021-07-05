import React from 'react'
import {MainContainer, LogoDiv, Logo, ButtonsDiv, StyledButton} from './styled'
/* import ApplicationFormPage from '../ApplicationFormPage/ApplicationFormPage'
import CreateTripPage from '../CreateTripPage/CreateTripPage'
import HomePage from '../HomePage/HomePage'
import ListTripsPage from '../ListTripsPage/ListTripsPage'
import LoginPage from '../LoginPage/LoginPage'
import TripDetailsPage from '../TripDetailsPage/TripDetailsPage' */

export default function  AdminHomePage(){
return (
    <MainContainer>
       <LogoDiv>
       <Logo>LabeX</Logo>
       </LogoDiv>
       <ButtonsDiv>
       <StyledButton>Viagens</StyledButton>
       <StyledButton>Login</StyledButton>
       </ButtonsDiv>
    </MainContainer>
)
}