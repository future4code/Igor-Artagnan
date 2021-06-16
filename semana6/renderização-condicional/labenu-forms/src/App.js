import React from 'react';
import styled from "styled-components"
import Pagina1 from './components/Pagina1'
import Pagina2 from './components/Pagina2'
import Pagina3 from './components/Pagina3'
import Final from './components/Final'

const MainContainer = styled.div`
    width: 500px;
    margin: auto;
`

const StyledButton = styled.button`
    margin-top: 19px;
    display: flex;
    margin-left: 128px;
    width: 72px;
    border-radius: 7px;
`





export default class LabeForm extends React.Component {
  state = {

    etapa: 1,

  }

  irParaProximaPagina = () => {
    this.setState({etapa: this.state.etapa+ 1})
  }


  render() {

    const RenderizaEtapa = () => {
      switch (this.state.etapa) {
        case 1:
          return <Pagina1 />
        case 2:
          return <Pagina2 />
        case 3:
          return <Pagina3 />
        case 4:
          return <Final />
        default:
          return <></>

      }
    }

    const RenderizaBotao = () => {
      if (this.state.etapa < 4){
        return <StyledButton onClick={this.irParaProximaPagina}>Proxima etapa</StyledButton>
      }
    }


    return (
      <MainContainer>
        
        
        {RenderizaEtapa()}

        {RenderizaBotao()}
        
        

      </MainContainer>
    )
  }

}