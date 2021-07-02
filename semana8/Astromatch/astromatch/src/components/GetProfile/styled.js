import styled from 'styled-components'

const Image = styled.img`
display: flex;
margin: auto;
height: 100%;
width: 100%;
align-items: center;

`

const MainContainer = styled.div`
display: flex;
flex-direction: column;
width: 300px;
height: 300px;
`
const InfoDiv = styled.div`
width: 400px;
background-color: grey;
height: 120px;

`

export {Image,
    MainContainer,
    InfoDiv}
