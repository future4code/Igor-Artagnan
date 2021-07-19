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

const InfoDiv = styled.div`
flex-direction: column-reverse;
justify-content: center;
display: flex;
margin: auto;
-webkit-align-items: center;
-webkit-box-align: center;
h1{
    color: white;
}
`
const ButtonsDiv = styled.div`
width: 250px;
display: flex;
justify-content: space-between;
margin: 30px;
`

const TripsDiv = styled.div`
background: rgba( 244, 243, 243, 0.20 );
box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
backdrop-filter: blur( 2.0px );
-webkit-backdrop-filter: blur( 2.0px );
border-radius: 10px;
border: 1px solid rgba( 255, 255, 255, 0.18 );
display: flex;
flex-direction: column;
align-items: center;
margin-top: 15px;
h1{
    font-size: 30px;
}
h3{
    font-size: 20px;
    
}

`

export {
    MainContainer,
    StyledButton,
    InfoDiv,
    ButtonsDiv,
    TripsDiv
}