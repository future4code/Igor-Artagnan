import React from "react";
import axios from "axios";


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
    inputEmail: ""
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
      })

      .catch((error) => {
        alert(error.response.data.message)
      })
  }

  mostrausuarios = () =>{

    axios.get(url, header)
    .then((response)=>{

      this.setState({usuarios: response.data.result.list})



    })

    .catch((error) =>{
      alert(error.response.data.message)
    })

  }

  

  render() {
    
    console.log(this.state.usuarios)

      /* const listaDeUsuarios = this.state.usuario.map((usuario)=>{
        return <li>
              
              {usuario.nome}
              {usuario.email}
              
              </li>

      }) */

      
    return (
      <div>
        <h3>Nome:</h3>
        <input type="text" value={this.state.inputName} onChange={this.onChangeName} />
        <h3>Email:</h3>
        <input type="text" value={this.state.inputEmail} onChange={this.onChangeEmail} />
        <button onClick={this.criarUsuario}>Salvar</button>

      {/*   {listaDeUsuarios} */}

      </div>
    );
  }
}