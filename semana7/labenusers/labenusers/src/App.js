import React from "react";
import axios from "axios";
import styled from "styled-components"

const Container = styled.div`
border: 1px solid black;
display: flex;
align-items: center;
flex-direction: column;
width: 50%;
margin: auto;
margin-top: 49px;

`

const BotaoUsuarios = styled.button`
margin-top: 19px;

`

const BotaoAdicionar = styled.button`
margin-top: 14px;
`


const url = "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users"

const header = {
  headers: {
    Authorization: "igor-molina"
  }
}



export default class Home extends React.Component {
  state = {
    
    usuarios: [],

    inputName: "",
    inputEmail: "",
  
  };

 

  onChangeName = (event) => {
    this.setState({ inputName: event.target.value })
  }

  onChangeEmail = (event) => {
    this.setState({ inputEmail: event.target.value })
  }

  criarUsuario = () => {

    const body = {
      name: this.state.inputName,
      email: this.state.inputEmail
  
    }


    axios.post(url, body, header)

      .then(() => {
        alert("Usuário cadastrado com sucesso!")
    
        this.setState({inputName: "", inputEmail:"" })
        
        this.mostrausuarios()
      })

      .catch((error) => {
        alert(error.response.data.message)
      })
  }

  mostrausuarios = () =>{

    axios.get(url, header)
    .then((response)=>{

      this.setState({usuarios: response.data})



    })

    .catch((error) =>{
      alert(error.response.data.message)
    })

  }

  
  

  render() {
    
    

       const listaDeUsuarios = this.state.usuarios.map((usuario)=>{
        return <p key={usuario.id}>
              
              {usuario.name}
              
              </p>

      }) 



     

      

      
    return (
      <Container>
        <h3>Nome:</h3>
        <input type="text" 
        value={this.state.inputName} 
        onChange={this.onChangeName} />

        <h3>Email:</h3>
        <input type="text" 
        value={this.state.inputEmail} 
        onChange={this.onChangeEmail} />
        
        <BotaoAdicionar onClick={this.criarUsuario}>Registrar</BotaoAdicionar>
        <BotaoUsuarios>Ver usuários cadastrados</BotaoUsuarios>
          
          
          <h3>Usuários Cadastrados:</h3>
          {listaDeUsuarios}
         

      </Container>
    );
  }
}