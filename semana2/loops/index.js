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

//3) O valor inserido no prompt será o que vai definir a quantidade de vezes que o loop irá funcionar. Cada vez que ele rodar, irá adicionar "0" a variável linha, entao se o valor inserido for 4 o resultado será:
/* *
   **
   ***
   ****

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
/* USANDO FOR OF

let imprimeValoresArray = () =>{
    for(let valor of arrayOriginal){
        console.log(valor)
    }
}
      A variável "valor" é um index da array "arrayOriginal", então o loop ira funcionar percorrendo toda a array, e só irá parar quando ler todos os seus elementos.
*/
//b

let imprimeValoresArrayDivididos = () => {
    for (let i = 0; i < arrayOriginal.length; i++) {
        console.log(arrayOriginal[i] / 10)

    }

}

//c)

let imprimeArrayNumerosPares = () => {
    for (let arrayPar of arrayOriginal) {


        if (arrayPar % 2 === 0) {
            arrayResultadoPar.push(arrayPar)

        }

    }
    console.log(arrayResultadoPar)

}

//d)

let imprimeArrayComStrings = () => {
    for (let i = 0; i < arrayOriginal.length; i++) {
        let resposta = `O elemento do índex ${i} é ${arrayOriginal[i]}`

        arrayStrings.push(resposta)


    }

    console.log(arrayStrings)

}
/* USANDO FOR OF

let imprimeArrayComStrings = () =>{
let i = 0

for(let valor of arrayOriginal){
    arrayStrings.push(`O elemento do index ${i}` é ${valor})
   
    i++
}

console.log(arrayStrings)

}



*/

//e

/*
let imprimeMaiorEMenorNumeroArray = (arrayOriginal) => {
    let menorNumero = 0
    let maiorNumero = Infinity

    for (let i = 0; i < arrayOriginal.length; i++) {
        if (arrayOriginal[i] < menorNumero) {
            menorNumero = arrayOriginal[i]
        } else if (arrayOriginal[i] > maiorNumero) {
            maiorNumero = arrayOriginal[i]
        }
    }

    console.log(`O maior número é ${maiorNumero}`)
    console.log(`O menor número é ${menorNumero}`)
}

imprimeMaiorEMenorNumeroArray(arrayOriginal) */






//imprimeArrayComStrings()
//imprimeArrayNumerosPares ()
//imprimeValoresArray()
//imprimeValoresArrayDivididos()




//DESAFIO

//1
console.log("Vamos jogar!")
const numeroEscolhido = Number(prompt("EScolha um número: "))

let acertou = false
let tentativas = 0

let numertoChutado

while (!acertou){
    numeroChutado = Number(prompt("Chute um número"))
    tentativas++
    console.log("O numero chutado foi", numertoChutado)
    if(numeroChutado === numeroEscolhido){
        console.log(`Acertou!!`)
        console.log(`O número de tentativas foi ${tentativas}`)
        acertou = true

    } else if (numeroEscolhido > numertoChutado){
        console.log(`Errou. O número é maior`)
    }else {
        console.log(`Errou. O número escolhido é menor`)
    }

}
















