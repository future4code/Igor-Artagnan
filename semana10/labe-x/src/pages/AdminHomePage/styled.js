import styled from 'styled-components'

const MainContainer = styled.div`
height: 100vh;
background-image: url("http://media.beam.usnews.com/25/cb/58ff212640e48425b1d6920bdf79/170424-stock.jpg");
background-repeat: no-repeat;
background-position: top center ;
background-size: cover;
`
const StyledButton = styled.button`
width: 100px;
color: white;
height: 40px;
border-radius: 30px;
background-color: black;
:hover{
    cursor: pointer;
    border-radius:0px;
}
`

const ButtonsDiv = styled.div`
width: 550px;
display: flex;
justify-content: space-between;
margin: auto;
`
export {
    MainContainer,
    StyledButton,
    ButtonsDiv
}