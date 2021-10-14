import styled from 'styled-components'

export const ResultDiv = styled.div`
display: flex;
justify-content: space-around;
align-items: center;
flex-direction: row;
width: 100%;
height: 250px;
border: 1px solid red;
flex-wrap: wrap; 
`

export const NumberDiv = styled.div`
display: flex;
justify-content: center;
align-items: center;
width: 50px;
height: 50px;
border-radius: 50%;
border: 1px solid black;
`

export const SelectDiv = styled.div`
width: 100%;
height: 100px;
border: 1 px solid red;
display: flex;
justify-content: center;
align-items: center;
`

export const InfoDiv = styled.div`
text-align: center;
border: 1 px solid red;

`

export const ConcursoDiv = styled.div`
text-align: center;
border: 1 px solid red;
`
export const ColorDiv = styled.div`
border: 1px solid red;
margin-bottom: 20px;
height: 250px;
border-radius: 0 0 50% 50% ;
background-color: ${({ color }) => color};
`

