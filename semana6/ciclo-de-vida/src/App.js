import React from 'react'
import styled from 'styled-components'
import './styles.css'

//Estilizações

const TarefaList = styled.ul`
  padding: 0;
  width: 200px;
`

const Tarefa = styled.li`
  text-align: left;
  text-decoration: ${({completa}) => (completa ? 'line-through' : 'none')};
`
//LÓGICA DO TERNÁRIO: Ele recebe o valor do elemento "completa" que se encontra na array tarefas. Se baseando no return do switchcase dentro da função listFiltrada. completa ? é true (ou seja, tarefa completa) - realiza a estilização 'line-through' : é false (tarefa pendente) - realiza nenhuma estilização 'none' ''

const InputsContainer = styled.div`
  display: grid;
  grid-auto-flow: column;
  gap: 10px;
`
//State com array e elementos/chaves vazios, que vão receber algum valor 
class App extends React.Component {
    state = {
      tarefas: [
        {
          id: Date.now(), // Explicação abaixo
          texto: 'Passear com os Cachorros',
          completa: false// Indica se a tarefa está completa (true ou false)
        },

        {
          id: Date.now(), // Explicação abaixo
          texto: 'Fazer almoço',
          completa: true // Indica se a tarefa está completa (true ou false)
        }
      ],
      inputValue: '',
      filtro: ''
    }

//Métodos de lifecycle    

  componentDidUpdate() {

    
   /*  localStorage.setItem('tarefas', JSON.stringify(this.state.inputValue)) */
    

    
  };

  

  /*   componentDidMount() {

    const tarefasSalvas = localStorage.getItem('tarefas')
    const arrayTarefas = JSON.parse(tarefasSalvas)
      this.setState({tarefas: arrayTarefas})
  }; */
 
//Funções

//Essa função seta para dentro do input tudo o que for digitado pelo usuário.

  onChangeInput = (event) => {
    this.setState({inputValue: event.target.value})

  }

//Essa função cria um novo objeto com as mesmas propriedades dos objetos da array Tarefas. No texto, recebe o que for inserido dentro do input pelo usuário. Após isso, cria uma nova array, onde é uma cópia da array tarefas + o objeto novaTarefa. Usando o this.setState, essa nova array é inserida dentro do state.

  criaTarefa = () => {
   const novaTarefa = {
     
     id: Date.Now,
     texto: this.state.inputValue,
     completa: false
    
    }

    let novaListaTarefa = [novaTarefa, ...this.state.tarefas]
    this.setState({tarefas: novaListaTarefa})
   

  }

  selectTarefa = (id) => {
    const novasTaredasFiltradas = this.state.tarefas.map((tarefa)=>{
       if (id === tarefa.id){
      
        const novaTarefaCopia = {
         ...tarefa, 
          completa: !tarefa.completa
       }

       return novaTarefaCopia

      }else {
        return  tarefa
      }

      

    })

    this.setState({tarefas: novasTaredasFiltradas})

  }

  onChangeFilter = (event) => {
    this.setState({filtro: event.target.value} )
  }

  render() {
//A função listaFiltrada retorna um novo array baseado nas informações da array Tarefa. O parâmetro que o filtro se baseia é definido pelo switch case.

//Caso o valor de filtro seja "pendentes", ele retorna que tarefa.completa será FALSE, o que irá mostrar as strings de tarefa normalmente.

//Caso o valor de filtro seja 'completas', ele retorna que tarefa.completa será TRUE, o que irá mostrar as strings de tarefas riscadas.

console.log("Tarefas", this.state.tarefas)

    const listaFiltrada = this.state.tarefas.filter(tarefa => {
      switch (this.state.filtro) {
        case 'pendentes':
          return !tarefa.completa
        case 'completas':
          return tarefa.completa
        default:
          return true
      }
    })

    return (
      <div className="App">
        <h1>Lista de tarefas</h1>
        <InputsContainer>
          <input value={this.state.inputValue} onChange={this.onChangeInput}/>
          <button onClick={this.criaTarefa}>Adicionar</button>
        </InputsContainer>
        <br/>

        <InputsContainer>
          <label>Filtro</label>
          <select value={this.state.filter} onChange={this.onChangeFilter}>
            <option value="">Nenhum</option>
            <option value="pendentes">Pendentes</option>
            <option value="completas">Completas</option>
          </select>
        </InputsContainer>
        <TarefaList>

{/*Aqui é realizado um mapeamento da variável listaFiltrada, onde é retornado para dentro de uma li estilizada, cada tarefa existente (identificada pelo seu próprio ID) e o seu status (completa ou pendente)*/}          
          {listaFiltrada.map(tarefa => {
            return (
              
              /* A props tarefa.completa vem da propriedade text-decoration, no styled-component Tarefa. Lá, existe uma lógica em um ternário, onde define uma estilização de texto baseado no valor de filtro (que se encontra na função listaFiltrada)*/

              <Tarefa
                completa={tarefa.completa}
                onClick={() => this.selectTarefa(tarefa.id)}
              >
                {tarefa.texto}
              </Tarefa>
            )
          })}
        </TarefaList>
      </div>
    )
  }
}

export default App
