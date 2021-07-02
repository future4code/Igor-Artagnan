import styled from 'styled-components'


const MainContainer = styled.div`
display: flex;
flex-direction: column;
width: 400px;
border: 1px solid red;
`
const InfoDiv = styled.div`
background-color: rgba(0,0,0,0.10);
border: 1px solid red;
width: 100%;
padding: 20px 5px;
`

const ChooseButtonsDiv = styled.div`
display: flex;
background-color: blue;
justify-content: center;
margin-top: 15px;
border: 1px solid red;
padding: 50px 0px;

`

const StyledButton = styled.button`
height: 25px;
margin: 0px 50px;
`

const Name = styled.p`
font-size: 20px;
text-align: center;
font-family: system-ui;


`
const Bio = styled.p`
font-size: 15px;
text-align: center;
font-family: system-ui;
`

export {
    MainContainer,
    InfoDiv,
    ChooseButtonsDiv,
    StyledButton,
    Name,
    Bio
}
