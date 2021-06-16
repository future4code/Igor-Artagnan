import axios from "axios";
import React from "react";

export default class TelaListaUsuario extends React.Component {
  state = {
    usuarios: []
  };

  componentDidMount() {
    this.getAllUsers();
  }

  getAllUsers = () => {
    const url =
      "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users";
    const header = {
      headers: {
        Authorization: "igor-molina"
      }
    };

    axios
      .get(url, header)

      .then((response) => {
        this.setState({ usuarios: response.data });
      })

      .catch((error) => {
        alert("Erro, tente novamente!");
      });
  };

  deleteUser = (id) => {
    const url = `https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${id}`;

    //Toda a execução da função de requisição de deletar user depende se o confirm retornar TRUE.
    
    if(window.confirm("Tem certeza que deseja deletar esse usuário?")){
    
        axios
      .delete(url, {
        headers: {
          Authorization: "igor-molina"
        }
      })

      .then((response) => {
        alert("Usuário deletado com sucesso!");
        this.getAllUsers();
      })

      .catch((error) => {
        alert("Ocorreu um erro, tente novamente!");
      });
  }};

  render() {
    const listaUsuarios = this.state.usuarios.map((usuario) => {
      return (
        <div key={usuario.id}>
          {usuario.name}
          <button onClick={this.props.irParaDetalhe}>Detalhes</button>
          <button onClick={() => this.deleteUser(usuario.id)}>Apagar</button>
        </div>
      );
    });

    return (
      <div>
        <button onClick={this.props.irParaCadastro}>Cadastrar Usuário</button>
        <h3>Lista de usuários</h3>
        {listaUsuarios}
      </div>
    );
  }
}
