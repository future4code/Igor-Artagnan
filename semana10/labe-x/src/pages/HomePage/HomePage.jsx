import React from 'react'
import {MainContainer, LogoDiv, Logo, ButtonsDiv, StyledButton} from './styled'


export default function  HomePage(){
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