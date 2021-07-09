import styled from 'styled-components'

const MainContainer = styled.div`
height: 100vh;
background-image: url("http://media.beam.usnews.com/25/cb/58ff212640e48425b1d6920bdf79/170424-stock.jpg");
background-repeat: no-repeat;
background-position: top center ;
background-size: cover;

`
const ButtonsDiv = styled.div`
width: 250px;
display: flex;
justify-content: space-between;
margin: 30px;
margin: auto;
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
const InfoDiv = styled.div`
flex-direction: column;
justify-content: center;
display: flex;
margin: auto;
-webkit-align-items: center;
-webkit-box-align: center;
h1{
    color: white;
}
`
const FormDiv = styled.div`
display: flex;
flex-direction: column;
width: 300px;
margin:auto;
align-items: center;
`

const StyledInput = styled.input`
margin-top: 10px;
border-radius: 10px;
height: 30px;
width: 400px;
padding: 5px;
`
const StyledSelect = styled.select`
margin-top: 10px;
border-radius: 10px;
height: 30px;
width: 400px;
`

export {
    MainContainer,
    ButtonsDiv,
    StyledButton,
    InfoDiv,
    FormDiv,
    StyledInput,
    StyledSelect
}