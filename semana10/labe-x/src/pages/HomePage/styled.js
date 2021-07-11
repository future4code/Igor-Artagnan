import styled from 'styled-components'


const MainContainer = styled.div`
height: 100vh;
background-image: url("http://media.beam.usnews.com/25/cb/58ff212640e48425b1d6920bdf79/170424-stock.jpg");
background-repeat: no-repeat;
background-position: top center ;
background-size: cover;
`
const LogoDiv = styled.div`
display:flex;
flex-direction: row;
`
const Logo = styled.h1`
font-weight: 100;
font-size: 150px;
color: cornsilk;
margin-left: 160px;

`
const ButtonsDiv = styled.div`
width: 250px;
display: flex;
justify-content: space-between;
 margin: 30px; 
 margin-left: 228px;


`
const StyledButton = styled.button`
width: 100px;
color: white;
height: 40px;
border-radius: 30px;
border: none;
background-color: black;
:hover{
    cursor: pointer;
    border-radius:0px;
}
`
export {
    MainContainer,
    LogoDiv,
    Logo,
    ButtonsDiv,
    StyledButton
}

