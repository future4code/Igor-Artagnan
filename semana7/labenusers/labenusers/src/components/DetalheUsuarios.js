import React from 'react'


export default class DetalheUsuarios extends React.Component {

   

    

    render(){

        return(
            <div>
                <button onClick={this.props.voltarParaLista}>Voltar para lista</button>
                <h2>Detalhes do Usuario</h2>
                
                <p>Nome: {this.props.usuario.name}</p>
                <p>Email: {this.props.usuario.email}</p>
            </div>
        )
    }
}