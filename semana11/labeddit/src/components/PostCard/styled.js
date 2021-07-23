import styled from 'styled-components'

export const CardDiv = styled.div`
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

export const IconsDiv = styled.div`
border: 1px solid red;
display:flex;
width: 100%;
justify-content: space-around;
/* margin-top: 50px;
 */`
export const VoteDiv = styled.div`
display: flex;
width: 50%;
justify-content: center;
`

export const CommentDiv = styled.div`
display: flex;
align-items: center;
width: 50%;
justify-content: center;
`

export const UserDiv = styled.div`
display: flex;
align-items: center;
width: 100%;

`

export const TitleDiv = styled.div`
display: flex;
align-items: center;
width: 100%;

`

export const BodyDiv = styled.div`
display: flex;
align-items: center;
width: 100%;

`


