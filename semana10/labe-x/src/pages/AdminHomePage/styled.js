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
border: none;
background-color: black;
:hover{
    cursor: pointer;
    border-radius:0px;
}
`

const DeleteButton = styled.button`
width: 100px;
color: white;
height: 40px;
border-radius: 30px;
border: none;
background-color: black;
height: 30px;
margin-right: 5px;

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

const CardDiv = styled.div`
background: rgba( 244, 243, 243, 0.20 );
box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
backdrop-filter: blur( 2.0px );
-webkit-backdrop-filter: blur( 2.0px );
border-radius: 10px;
border: 1px solid rgba( 255, 255, 255, 0.18 );
display: flex;
justify-content: space-between;
margin: auto;
width: 700px;
height: 50px;
margin-top: 15px;
padding: 10px;

:hover{
    cursor: pointer;
}
`
export {
    MainContainer,
    StyledButton,
    ButtonsDiv,
    CardDiv,
    DeleteButton
}