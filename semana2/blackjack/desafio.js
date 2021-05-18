/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */
    let somaCartas = (numero1, numero2) => {
      return numero1 + numero2
   }
   let arrayCartas = [carta1, carta2, carta3, carta4]
   let carta1 = comprarCarta()
   let carta2 = comprarCarta()
   let carta3 = comprarCarta()
   let carta4 = comprarCarta()

  let compararCartas = (arrayCartas) =>{
     if(arrayCartas[0] && arrayCartas[1] === 'A'){

      

     }
  }
   
   
   
   console.log("Bem vindo ao jogo de BlackJack")
   if (confirm(`Quer iniciar uma nova rodada?`) === true) {
      
      let somaUsuario = somaCartas(carta1.valor, carta2.valor)
      let somaComputador = somaCartas(carta3.valor, carta4.valor)
      
      console.log(`Usuário - cartas - ${carta1.texto} ${carta2.texto} - Pontuação ${somaUsuario}`)
      console.log(`Computador - cartas - ${carta3.texto} ${carta4.texto} - Pontuação ${somaComputador}`)
   
      if (somaUsuario > somaComputador) {
         console.log("O usuário ganhou!")
      } else if (somaComputador > somaUsuario) {
         console.log("O computador ganhou!")
      } else {
         console.log("Empate!")
      }
   
   
   }