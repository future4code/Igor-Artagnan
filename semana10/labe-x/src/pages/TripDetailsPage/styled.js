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

const DecisionButton = styled.button`
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

h1{
    font-size: 30px;
}
h3{
    font-size: 20px;
  
}
`
const CandidatesDiv = styled.div`
background: rgba( 244, 243, 243, 0.20 );
box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
backdrop-filter: blur( 2.0px );
-webkit-backdrop-filter: blur( 2.0px );
border-radius: 10px;
border: 1px solid rgba( 255, 255, 255, 0.18 );
display: flex;
flex-direction: column;
align-items: center;
margin: auto;
width: 600px;
margin-top: 10px;

h2{
    font-size: 25px;
}

`

const ApprovedDiv = styled.div`
background: rgba( 244, 243, 243, 0.20 );
box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
backdrop-filter: blur( 2.0px );
-webkit-backdrop-filter: blur( 2.0px );
border-radius: 10px;
border: 1px solid rgba( 255, 255, 255, 0.18 );
display: flex;
flex-direction: column;
align-items: center;
margin: auto;
width: 600px;
margin-top: 10px;

h2{
    font-size: 25px;
}

`
const ButtonDiv = styled.div`
width: 256px;
display: flex;
justify-content: space-between;
margin: auto;
margin-top: 3px;
`

const GoBackDiv = styled.div`
margin: auto;
display: flex;
justify-content: center;
margin-top: 20px;

h2{
    font-size: 25px;
}

`

export {
    MainContainer,
    StyledButton,
    DecisionButton,
    TripsDiv,
    CandidatesDiv,
    ApprovedDiv,
    ButtonDiv,
    GoBackDiv
}