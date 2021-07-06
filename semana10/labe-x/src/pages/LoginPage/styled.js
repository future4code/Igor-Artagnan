import styled from 'styled-components'

const MainContainer = styled.div`
height: 100vh;
background-image: url("http://media.beam.usnews.com/25/cb/58ff212640e48425b1d6920bdf79/170424-stock.jpg");
background-repeat: no-repeat;
background-position: top center ;
background-size: cover;
display: flex;
justify-content: center;
flex-direction: column;
text-align: center;
h1{
    color: cornsilk;
    font-weight: 100;
    font-size: 45px;
}

`

const InputsContainer = styled.div`
display: flex;
flex-direction: column;
height: 100px;
`

const StyledInputs = styled.input`
width: 200px;
margin:auto;
border-radius: 20px;
height: 30px;
`

const ButtonDiv = styled.div`
width: 256px;
display: flex;
justify-content: space-between;
margin: auto;
margin-top: 3px;

`

const InfoDiv = styled.div`

height: 300px;

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

export {
    MainContainer,
    InputsContainer,
    StyledInputs,
    ButtonDiv,
    InfoDiv,
    StyledButton
    
}