import React from 'react';
import styled from 'styled-components'
import Post from './components/Post/Post';

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`

const ContainerNovosPosts = styled.div`
  border: 1px solid black;
  display: flex; 
  flex-direction: column;
  align-items: center;
  margin-bottom: 11px;
  margin-top: 5px;
  padding: 60px;
  
  `



{/* O componente App é pai do componente Post.js */ }

class App extends React.Component {

  state = {

    posts: [
      {
        nomeUsuario: "labenu",
        fotoUsuario: "https://picsum.photos/50/50",
        fotoPost: "https://picsum.photos/200/150"
      },

      {
        nomeUsuario: "catholiceducation",
        fotoUsuario: "https://picsum.photos/50/60",
        fotoPost: "https://picsum.photos/200/160"
      },

      {
        nomeUsuario: "pandora",
        fotoUsuario: "https://picsum.photos/50/70",
        fotoPost: "https://picsum.photos/200/170"
      },




    ],
    valorInputNomeUsuario: "",
    valorInputFotoUsuario: "",
    valorInputFotoPost: ""
  }

  adicionaNovoPost = () => {
    const novoPost = {
      nomeUsuario: this.state.valorInputNomeUsuario,
      fotoUsuario: this.state.valorInputFotoUsuario,
      fotoPost: this.state.valorInputFotoPost
    }

    const NovoPostAtualizado = [...this.state.posts, novoPost]
    this.setState({ posts: NovoPostAtualizado })

  }


  onChangeNomeUsuario = (event) => {
    this.setState({ valorInputNomeUsuario: event.target.value })

  }

  onChangeFotoUsuario = (event) => {
    this.setState({ valorInputFotoUsuario: event.target.value })
  }

  onChangeFotoPost = (event) => {
    this.setState({ valorInputFotoPost: event.target.value })
  }

  render() {

    const componentesPost = this.state.posts.map((post, index) => {
      return <Post key={index}
        nomeUsuario={post.nomeUsuario}
        fotoUsuario={post.fotoUsuario}
        fotoPost={post.fotoPost}

      />





    })


    return (
      <MainContainer>
        <ContainerNovosPosts>
          <input
            value={this.state.valorInputNomeUsuario}
            placeHolder={'Nome de usuário'}
            onChange={this.onChangeNomeUsuario}
          />

          <input
            value={this.state.valorInputFotoUsuario}
            placeHolder={'Foto de usuário'}
            onChange={this.onChangeFotoUsuario} />

          <input
            value={this.state.valorInputFotoPost}
            placeHolder={'Foto do post'}
            onChange={this.onChangeFotoPost} />

          <button onClick={this.adicionaNovoPost}>Criar novo Post</button>

        </ContainerNovosPosts>


        {componentesPost}

      </MainContainer>



    );
  }
}

export default App;