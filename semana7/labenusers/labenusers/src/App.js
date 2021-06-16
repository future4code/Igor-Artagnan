import React from "react";
import TelaListUsuario from "./components/TelaListaUsuario";
import TelaCadastro from "./components/TelaCadastro";


export default class App extends React.Component {
  state = {
    telaAtual: "cadastro"
  };

  escolheTela = () => {
    switch (this.state.telaAtual) {
      case "cadastro":
        return <TelaCadastro irParaLista={this.irTelaLista} />;
      case "lista":
        return <TelaListUsuario irParaCadastro={this.irTelaCadastro} />; 
      default:
        return <div>Página não encontrada.</div>;
    }
  };

  irTelaCadastro = () => {
    this.setState({ telaAtual: "cadastro" });
  };

  irTelaLista = () => {
    this.setState({ telaAtual: "lista" });
  };


  render() {
    return <div>{this.escolheTela()}</div>;
  }
}
