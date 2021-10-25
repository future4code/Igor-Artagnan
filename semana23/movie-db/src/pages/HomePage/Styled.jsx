import styled from "styled-components";

export const Main = styled.div`
background-color:  #030303;;
`
export const Card = styled.div`
display: flex;
flex-wrap: wrap;
padding: 2px;
justify-content: space-around;
`

export const CheckDiv = styled.div`
margin-top: 10px;
display: grid;
grid-template-columns: 2fr 2fr 2fr;
grid-template-rows: auto;
margin-left: 50px;

@media (min-width: 900px) {
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
justify-content: space-evenly;
margin-left: 0px;
}
`

export const PageDiv = styled.div`
display: flex;
flex-direction: row;
justify-content: space-around;
align-items: center;
justify-content: center;
margin-top: 5px;
background-color: #646262;
`

export const InputDiv = styled.div`
p {
    color: white;
}
`