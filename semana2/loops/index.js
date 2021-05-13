//EXERCÍCIOS DE INTERPRETAÇÃO DE CÓDIGO

//1) Nesse programa, o for ira incrementar +1 ao valor de i e enquanto esse valor for menor que 5, somará o valor atribuido a variável "valor" + i. Quando o i for 5, o console retornará o resultado de valor = valor + 5, ou seja, 5+5 = 10.

//2) 

//a) Será impresso no console todos os números da array que são maiores que 18 = 19, 21, 23, 25, 27, 30

//b) Sim, nesse caso seria necessário declarar uma variável = 0, colocar como condição para que o loop leia os valores enquanto eles forem maiores que 0, assim informando para que o console consiga imprimir todos os valores que se encontram dentro da array.
/*
const lista = [10, 11, 12, 15, 18, 19, 21, 23, 25, 27, 30]
let maior = 0
for (let numero of lista) {
  if (numero > maior) {
      maior = numero        
    console.log(numero)
    }
}    */

//3) O valor inserido no prompt será o que vai definir a quantidade de vezes que o loop irá funcionar. Cada vez que ele rodar, irá adicionar "0" a variável linha, entao se o valor inserido for 0 o resultado será:
/* 0
   00
   000
   0000

*/




//EXERCÍCIO DE ESCRITA DE CÓDIGO

//1
/*
let array = []
let quantidadeBichos;
let perguntaUsuario = () =>{
    let bichos = Number(prompt('Quantos animais de estimação você tem?'))
    if (bichos <= 0){
        console.log('Que pena... Você poderia adotar um pet!')


    } else {
        for (let i = 0; i < bichos; i++) {
        let perguntaNomes = prompt('Digite os nomes dos animais que você tem (um de cada vez):')
        array.push(perguntaNomes)  // se colocasse o prompt diretamente dentro do push da array, funcionaria e evitaria o uso da variável "perguntaNomes"
       
       }
       
       console.log(array)
    }
}

perguntaUsuario() */

//2

//a

const arrayOriginal = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]

let arrayPar = []
let arrayResultadoPar = []
let arrayStrings = []




let imprimeValoresArray = () => {
    for (let i = 0; i < arrayOriginal.length; i++) {
        console.log(arrayOriginal[i])

    }
}

//b

let imprimeValoresArrayDivididos = () => {
    for (let i = 0; i < arrayOriginal.length; i++) {
        console.log(arrayOriginal[i]/10)

}

}

//c)

let imprimeArrayNumerosPares = () => {
     for (let arrayPar of arrayOriginal){
        
      
      if (arrayPar % 2 === 0){
           arrayResultadoPar.push(arrayPar)
           
      }   
      
     }
     console.log(arrayResultadoPar)

}

//d)

let imprimeArrayComStrings = () =>{
    for (let i = 0; i < arrayOriginal.length; i++) {
        let resposta = `O elemento do índex ${i} é ${arrayOriginal[i]}`
        
        arrayStrings.push(resposta)
        

    }

    console.log(arrayStrings)
    
}









//imprimeArrayComStrings()
//imprimeArrayNumerosPares ()
//imprimeValoresArray()
//imprimeValoresArrayDivididos()