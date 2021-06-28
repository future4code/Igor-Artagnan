import axios from "axios";
import React from "react";
import styled from 'styled-components'

const ContainerCadastro = styled.div`
display:flex;
flex-direction: column;
border: 1px solid black;
width:200px;
margin: auto;
padding: 20px 20px;

`

export default class TelaCadastro extends React.Component {
  state = {
    inputNome: "",
    inputEmail: ""
  };

  onChangeNome = (event) => {
    this.setState({ inputNome: event.target.value });
  };

  onChangeEmail = (event) => {
    this.setState({ inputEmail: event.target.value });
  };

  createUser = () => {
    const url =
      "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users";
    const body = {
      name: this.state.inputNome,
      email: this.state.inputEmail
    };

    const header = {
      headers: {
        Authorization: "igor-molina"
      }
    };

    axios
      .post(url, body, header)

      .then((response) => {
        alert("Usuário cadastrado com sucesso!");
        this.setState({ inputNome: "", inputEmail: "" });
      })

      .catch((error) => {
        alert(error.response.data.message);
      });
  };

  render() {
    return (
      <div>
        <button onClick={this.props.irParaLista}>Usuários Cadastrados</button>
        <ContainerCadastro>
          <p>Nome</p>
          <input
            type="text"
            placeholder="nome"
            value={this.state.inputNome}
            onChange={this.onChangeNome}
          />

          <p>Email</p>
          <input
            type="text"
            placeholder="email"
            value={this.state.inputEmail}
            onChange={this.onChangeEmail}
          />
          <button onClick={this.createUser}>Cadastrar</button>
        </ContainerCadastro>
      </div>
    );
  }
}
