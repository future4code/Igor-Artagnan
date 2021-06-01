import React from 'react';
import styled from "styled-components"

const DivComBorda = styled.div`
    display: flex;
    align-items: center;
    border: 1px solid black;
    padding: 20px 10px;
    margin-bottom: 10px;
    height: 200px;

`

const Perfil = styled.img`
width: 70px;
margin-right: 10px;
border-radius: 50%;

`
const Nome = styled.h4`
margin-bottom: 15px;

`

function CardGrande(props) {
    return (
        <DivComBorda>
            <Perfil img src={ props.imagem }  />
            <div>
               <Nome> <h4>{ props.nome }</h4> </Nome>
                <p>{ props.descricao }</p>
            </div>
        </DivComBorda>
    )
}

export default CardGrande;