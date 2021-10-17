import styled from 'styled-components'


export const MainDiv = styled.div`
background-color: #e5e3e3;
border: 1px solid red;

  @media (min-width: 900px) {
    display: flex;
    height: 694px;
    /* width: 1516px; */
 
}  
`

export const ResultDiv = styled.div`
display: flex;
justify-content: space-around;
align-items: center;
flex-direction: row;
width: 100%;
height: 203px;
flex-wrap: wrap; 
border: 1px solid red;

`

export const NumberDiv = styled.div`
display: flex;
justify-content: center;
align-items: center;
width: 30px;
height: 30px;
border-radius: 50%;
background-color: white;
border: 1px solid red;


h3{
    color: black;
    font-weight: 700;
    
}
`

export const SelectDiv = styled.div`
width: 100%;
height: 100px;
display: flex;
justify-content: center;
align-items: center;
border: 1px solid red;

`

export const FooterDiv = styled.div`
text-align: center;
margin: 32px;

 p{
    font-size: 14px;
    line-height: 21px;
 }

`

export const ConcursoDiv = styled.div`
text-align: center;
border: 1 px solid red;

h3{
    font-size: 14px;
    margin-top: 33px;

}

h2{
    font-size: 30px;
    margin-top: 5px;

}
  @media (min-width: 900px) {
   
    display: flex;
    justify-content: center;
    align-items: center;
    justify-content: space-around;

}


`
export const ColorDiv = styled.div`
margin-bottom: 20px;
background-color: ${({ color }) => color};
height: 314px;
border: 1px solid red;


 @media (min-width: 900px) {
    clip-path: polygon(0);
    height: 100%;
    width: 500px;


}  
`

export const NumeroConcurso = styled.div`
 @media (min-width: 900px){
    display: none;
} 
`

export const InfoDiv = styled.div`
 @media (min-width: 900px){
    border: 1px solid red;
    width: 100%auto;

} 
`




