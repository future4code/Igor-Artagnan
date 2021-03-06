import React from 'react'
import styled from 'styled-components'

import {IconeComContador} from '../IconeComContador/IconeComContador'

import iconeCoracaoBranco from '../../img/favorite-white.svg'
import iconeCoracaoPreto from '../../img/favorite.svg'
import iconeComentario from '../../img/comment_icon.svg'
import {SecaoComentario} from '../SecaoComentario/SecaoComentario'
import marcacao from '../../img/marcacao.png'
import marcacaoBlack from '../../img/marcacao-black.png'


{/*Estilizações das div's e imagens*/ }

const PostContainer = styled.div`
  border: 1px solid gray;
  width: 300px;
  margin-bottom: 10px;
`

const PostHeader = styled.div`
  height: 40px;
  display: flex;
  align-items: center;
  padding-left: 10px;
`

const PostFooter = styled.div`
  height: 40px;
  display: flex;
  align-items: center;
  padding: 0 10px;
  justify-content: space-between;
`

const UserPhoto = styled.img`
  height: 30px;
  width: 30px;
  margin-right: 10px;
  border-radius: 50%;
`

const PostPhoto = styled.img`
  width: 100%;
`

class Post extends React.Component {
  /* Declaração de estado, propriedades e seus valores */
  state = {
    curtido: false,
    numeroCurtidas: 0,
    comentando: false,
    numeroComentarios: 0,
    salvo: false
  }

/* Ao usuário clicar no ícone "iconeCurtida" o console retorna a frase 'Curtiu!' e reatribui o valor True a propriedade curtido*/

  onClickCurtida = () => {
    console.log('Curtiu!')
    this.setState({
      curtido:true
})

/*Ao clicar o valor de curtido se tornar TRUE, é setado a propriedade numeroCurtidas a soma de +1*/

if (!this.state.curtido){
    this.setState({numeroCurtidas: this.state.numeroCurtidas + 1})

    /*Ao ser clicado novamente, o valor de curtido se torna FALSE, setando a propriedade numeroCurtidas a subtração de 1*/
}else{
    this.setState({numeroCurtidas: this.state.numeroCurtidas - 1})
}
/*Ao ser clicado novamente, o valor de curtido se torna TRUE (!curtido = oposto de seu valor), voltando novamente a somar 1 ao numeroCurtidas */
this.setState({curtido: !this.state.curtido})



  }

  onClickComentario = () => {
    this.setState({
      comentando: !this.state.comentando
    })
    /*Ao clicar, o valor de comentando recebe o valor oposto, FALSE se torna TRUE*/
  }

  aoEnviarComentario = () => {
    this.setState({
      comentando: false,
      numeroComentarios: this.state.numeroComentarios + 1
    })

  }

  onClickMarcacao = () =>{
     this.setState({
       salvo: true
     })

     this.setState({
        salvo : !this.state.salvo
     })


  }

  render() {

    let iconeMarcacao

    if(this.state.salvo){
      iconeMarcacao = marcacaoBlack
    }else{
      iconeMarcacao = marcacao
    }

    let iconeCurtida

    if(this.state.curtido) {
      iconeCurtida = iconeCoracaoPreto
    } else {
      iconeCurtida = iconeCoracaoBranco
    }

    let componenteComentario

    if(this.state.comentando) {
      componenteComentario = <SecaoComentario aoEnviar={this.aoEnviarComentario}/>
    }

    return <PostContainer>
      <PostHeader>
        <UserPhoto src={this.props.fotoUsuario} alt={'Imagem do usuario'}/>
        <p>{this.props.nomeUsuario}</p>
      </PostHeader>

      <PostPhoto src={this.props.fotoPost} alt={'Imagem do post'}/>

      <PostFooter>
        <IconeComContador
          icone={iconeCurtida}
          onClickIcone={this.onClickCurtida}
          valorContador={this.state.numeroCurtidas}
        />

        <IconeComContador
          icone={iconeComentario}
          onClickIcone={this.onClickComentario}
          valorContador={this.state.numeroComentarios}
        />



        <IconeComContador
        icone={iconeMarcacao}
        onClickIcone={this.onClickMarcacao}
        />

      </PostFooter>
      {componenteComentario}
    </PostContainer>
  }
}

export default Post 