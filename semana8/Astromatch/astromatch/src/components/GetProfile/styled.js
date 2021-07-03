import styled from 'styled-components'

const MainContainer = styled.div`
display: flex;
flex-direction: column;
width: 400px;
`

const InfoDiv = styled.div`
background-color: rgba(0,0,0,0.7);
width: 100%;
padding: 20px 5px;
`

const ChooseButtonsDiv = styled.div`
display: flex;
justify-content: center;
margin-top: 15px;
padding: 50px 0px;
`

const StyledButtonAccept = styled.button`
    width: 53px;
    height: 53px;
    margin: 0px 50px;
    border-radius: 30px;
    color: green;
    
    :hover{
        cursor:pointer;
        background-color: #00ff03c9;
    }
`
const StyledButtonDenit = styled.button`
    width: 53px;
    height: 53px;
    margin: 0px 50px;
    border-radius: 30px;
    color: red;
    
    :hover{
        cursor:pointer;
        background-color: #ff0000c9;
    }
`

const Name = styled.p`
font-size: 20px;
text-align: center;
font-family: system-ui;
color: white;
margin-bottom: 5px;
`
const Bio = styled.p`
font-size: 15px;
text-align: center;
font-family: system-ui;
color: white;
`

export {
    MainContainer,
    InfoDiv,
    ChooseButtonsDiv,
    Name,
    Bio,
    StyledButtonAccept,
    StyledButtonDenit
}
