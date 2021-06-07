import React from 'react';
import CardGrande from './components/CardGrande/CardGrande';
import ImagemButton from './components/ImagemButton/ImagemButton';
import eu from './img/eu.png';
import renault from './img/renault.png';
import algar from './img/algar.jpg';
import CardPequeno from './components/CardPequeno/CardPequeno';
import adress from './img/adress.png'
import email from './img/email.png'
import styled from "styled-components"
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    
  }
  `

const DivContainer = styled.div`
  width: 40vw;
  margin: 10px 0;
`

const AppDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 30px;
`

const Texto = styled.h2`
display: flex;
  justify-content: center;
  margin-bottom: 20px;
`







function App() {
  return (
    <AppDiv>
      <GlobalStyle />
      <DivContainer>
        <Texto> <h2>Dados pessoais</h2></Texto>
        <CardGrande
          imagem={eu}
          nome="Igor Artagnan"
          descricao=" Oi, sou o Igor. Mecânico formado pelo Senai e músico por hobbie, encontrei na programação uma nova paixão e oportunidade
          de me estabelecer profissionalmente. Iniciei meu aprendizado em 2020 como autodidata, atualmente estudo
          Dev Full Stack na Labenu. Como entusiasta de tecnologia e musicista, pretendo agregar minha visão
          artística ao desenvolvimento de software."
        />

        <ImagemButton
          imagem="https://image.flaticon.com/icons/png/512/117/117472.png"
          texto="Ver mais"
        />

        <CardPequeno
          imagemDois={adress}
          email="igor@artagnan.com"
          imagem={email}
          endereço="Rua Dos Bobos, Nº 0."

        />

      </DivContainer>

      <div>
        <Texto><h2>Experiências profissionais</h2></Texto>
        <CardGrande
          imagem={renault}
          nome="Renault"
          descricao="Auxiliar Mecânico, atuando em revisões, diagnósticos correções."
        />

        <CardGrande
          imagem={algar}
          nome="Algar Tech"
          descricao="Suporte ao cliente."
        />
      </div>

      <div>
        <Texto> <h2>Minhas redes sociais</h2></Texto>
        <ImagemButton
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png"
          texto="Facebook"
        />

        <ImagemButton
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png"
          texto="Twitter"
        />
      </div>
    </AppDiv>
  );
}

export default App;
