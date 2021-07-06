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

`

const InputsContainer = styled.div`
display: flex;
flex-direction: column;
height: 100px;
`

const StyledInputs = styled.input`
width: 200px;
margin:auto;
`

const ButtonDiv = styled.div`
width: 100px;
display: flex;
justify-content: space-between;
margin: auto;
margin-top: 3px;

`

export {
    MainContainer,
    InputsContainer,
    StyledInputs,
    ButtonDiv
    
}