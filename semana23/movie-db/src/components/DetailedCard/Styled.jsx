import styled from 'styled-components'

export const MainDiv = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
background-color:#030303;

h1, h2, h3, h4{
    color: white
}

`

export const TitleDiv = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
margin-top: 5px;
border-bottom: 1px solid white;
height: 200px;
`

export const OverviewDiv = styled.div`
text-align: center;
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
height: 200px;

`

export const HeaderImage = styled.div`
display: flex;
justify-content: center;
width: 100vw;
height: 42vh;
background-image: url(${props => props.background});
background-repeat: no-repeat;
background-position: top;
background-size: cover;
    img {
        margin-top: 30px;
        border-radius: 4px;
        width: 35vw;
        height: 30vh;
        box-shadow: 0px 10px 13px -7px #000000, 5px 5px 15px 0px rgba(0,0,0,0);
                }
                
@media (min-width: 900px) {
background-position: center;
height: 300px;
    img {
        width: 160px;
        height: 225px;
                }
}
`

export const ButtonDiv = styled.div`
height: 50px;
display: flex;
align-items: center;
justify-content: left;

button{
    width: 30px;
    height: 30px;
    cursor: pointer;
}

spam{
    width: 100%;
}

`