import styled from 'styled-components'

const Image = styled.img`
width: 50px;
height: 50px;
border-radius: 50%;
display: flex;
margin-left: 5px;
`
const MatchContainer = styled.div`
display: flex;
height: 60px;
width: 90%;
margin: 15px;
:hover{
    background-color: #a5a5a5a1;
    cursor:pointer;
    img{
        height: 65px;
        width: 65px
    }
}
`
const StyledName = styled.h3`
font-size: 18px;
margin-left: 22px;
`
const ClearButton = styled.button`
position: absolute;
margin-top: -31px;
background: #62f7db;
:hover{
    cursor: pointer;
}
`

export {
    Image,
    MatchContainer,
    StyledName,
    ClearButton  
}