import React from 'react';
import styled from "styled-components"

const Icone = styled.img`
width: 33px;
margin-right: 10px;
border-radius: 50%;
`

const DivComBorda = styled.div`
    display: flex;
    align-items: center;
    border: 1px solid black;
    padding: 20px 10px;
    margin-bottom: 10px;
    height: 70px;

`



const CardPequeno = (props) =>{

return (
      <div>
          <DivComBorda>
        <Icone img src={props.imagem} />
        <div>
            <h4>Email:</h4>
            <p>{props.email}</p>
        </div>
        </DivComBorda>

        <DivComBorda>
        <Icone img src={props.imagemDois}/>
        <div>
          <h4> Endereço:</h4>
          <p>{props.endereço}</p>

        </div>

        </DivComBorda>

      </div>


)


}

export default CardPequeno