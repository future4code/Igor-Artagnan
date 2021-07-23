import styled from 'styled-components'

const CardDiv = styled.div`
background-color: grey;
width: 900px;
height: 200px;
margin: 10px;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
padding: 5px;

:hover{
    cursor: pointer;
}

`

const IconsDiv = styled.div`
border: 1px solid red;
display:flex;
width: 100%;
justify-content: space-evenly;
`
const VoteDiv = styled.div`
display: flex;
`

const CommentDiv = styled.div`
display: flex;
align-items: center;
`


export {
    CardDiv,
    IconsDiv,
    VoteDiv,
    CommentDiv
}