import styled from 'styled-components'

const Image = styled.img`
display: flex;
margin: auto;
height: 349px;
width: 297px;
align-items: center;

`

const MainContainer = styled.div`
display: flex;
flex-direction: column;
width: 300px;
height: 300px;
`
const InfoDiv = styled.div`
width: 398px;
background-color: grey;

`
const ImgContainer = styled.div`
border: 1px solid red;
width: 398px;
`

const ChooseButtonsDiv = styled.div`
display: flex;
background-color: grey;
justify-content: center;
width: 398px;
margin-top: 15px;

`

const StyledButton = styled.button`
height: 25px;
`

export {
    Image,
    MainContainer,
    InfoDiv,
    ImgContainer,
    ChooseButtonsDiv,
    StyledButton
}
