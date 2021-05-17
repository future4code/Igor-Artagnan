//Exercício 1
//Escreva uma função que recebe um array como parâmetro e retorne este array invertido. Obs: evite o uso da função reverse().
function inverteArray(array) {
   const arrayInvertida = array.map((item, index, array) => {
      return array[array.length - index - 1]

   })
   return arrayInvertida

}

inverteArray([0, 8, 23, 16, 10, 15, 41, 12, 13])

//Exercício 2
//Escreva uma função que recebe um array de números e retorna um array com os números pares elevados a 2.

function retornaNumerosParesElevadosADois(array) {
   const paresElevados = array.filter((num) => {
      return num % 2 === 0
   }).map((num) => {
      return num * num
   })

   return paresElevados






}

retornaNumerosParesElevadosADois([1, 2, 3, 4, 5, 6])

//Exercício 3
//Escreva uma função que receba um array de números e retorne um novo array com apenas os números pares desse array de entrada.

function retornaNumerosPares(array) {
   const numerosPares = array.filter((numero) => {
      return numero % 2 === 0
   })

   return numerosPares

}
retornaNumerosPares([1, 2, 3, 4, 5, 6])

//Exercício 4
//Escreva uma função que receba um array de números e retorne o maior número dele.
function retornaMaiorNumero(array) {
   let maior = 0
   for (let num of array) {
      if (num > maior) {
         maior = num
      }
   } return maior
}
retornaMaiorNumero([1, 2, 3, 4, 5, 6])

//Exercício 5
//Escreva uma função que recebe um array como parâmetro e retorna a quantidade de elementos que há nele.

function retornaQuantidadeElementos(array) {
   return array.length
}

retornaQuantidadeElementos([1, 2, 3, 4, 5, 6])

//Exercício 6


function retornaExpressoesBooleanas() {
   const booleano1 = true
   const booleano2 = false
   const booleano3 = !booleano2
   const booleano4 = !booleano3

   let compararA = booleano1 && booleano2 && !booleano4
   let comparaB = (booleano1 && booleano2) || !booleano3
   let comparaC = (booleano2 || booleano3) && (booleano4 || booleano1)
   let comparaD = !(booleano2 && booleano3) || !(booleano1 && booleano3)
   let comparaE = !(booleano1) && !(booleano3) || (!booleano4 && booleano3 && booleano3)

   const respostas = [compararA, comparaB, comparaC, comparaD, comparaE]

   return respostas
}

retornaExpressoesBooleanas()

//Exercício 7
//Escreva uma função que, recebendo um número N como parâmetro, retorne os N primeiros números pares (por exemplo, se N for 3, você deve imprimir 0, 2 e 4; se N for 5, deve retornar 0, 2, 4, 6 e 8). 

function retornaNNumerosPares(n) {

}

// Exercício 8
//Faça uma função que receba como parâmetro os tamanhos dos três lados do triângulo: a, b, c e retorne se ele é equilátero, isósceles ou escaleno.

function checaTriangulo(a, b, c) {
   if (a == b && b == c) {
      return "Equilátero"
   } else if (a == b || b == c || a == c) {
      return "Isósceles"
   } else {
      return "Escaleno"
   }
}

// Exercício 9

function comparaDoisNumeros(num1, num2) {
   

}

// Exercício 10

function segundoMaiorEMenor(array) {
   // implemente sua lógica aqui
}

//Exercício 11

function ordenaArray(array) {
   // implemente sua lógica aqui
}

// Exercício 12

function filmeFavorito() {
   const filmeAstroDev = {
      nome: `O Diabo Veste Prada`,
      ano: 2006,
      diretor: `David Frankel`,
      atores: ['Meryl Streep', "Anne Hathaway", "Emily Blunt", "Stanley Tucci"]
   }

   return filmeAstroDev
}

// Exercício 13

function imprimeChamada() {
   // implemente sua lógica aqui
}

// Exercício 14

function criaRetangulo(lado1, lado2) {
   // implemente sua lógica aqui
}

// Exercício 15

function anonimizaPessoa(pessoa) {
   // implemente sua lógica aqui
}

// Exercício 16

const arrayDePessoas = [
   { nome: "Pedro", idade: 20 },
   { nome: "João", idade: 10 },
   { nome: "Paula", idade: 12 },
   { nome: "Artur", idade: 89 }
]

// Exercício 16, letra A

function maioresDe18(arrayDePessoas) {
   // implemente sua lógica aqui
}

// Exercício 16, letra B

function menoresDe18(arrayDePessoas) {
   // implemente sua lógica aqui
}

// Exercício 17, letra A

function multiplicaArrayPor2(array) {
   // implemente sua lógica aqui
}

// Exercício 17, letra B

function multiplicaArrayPor2S(array) {
   // implemente sua lógica aqui
}

// Exercício 17, letra C

function verificaParidade(array) {
   // implemente sua lógica aqui
}

// Exercício 18

const pessoas = [
   { nome: "Paula", idade: 12, altura: 1.8 },
   { nome: "João", idade: 20, altura: 1.3 },
   { nome: "Pedro", idade: 15, altura: 1.9 },
   { nome: "Luciano", idade: 22, altura: 1.8 },
   { nome: "Artur", idade: 10, altura: 1.2 },
   { nome: "Soter", idade: 70, altura: 1.9 }
]

//Exercício 18, letra A

function retornaPessoasAutorizadas() {
   // implemente sua lógica aqui
}


// Exercício 18, letra B

function retornaPessoasNaoAutorizadas() {
   // implemente sua lógica aqui
}

//Exercício 19

const consultasNome = [
   { nome: "João", dataDaConsulta: "01/10/2021" },
   { nome: "Pedro", dataDaConsulta: "02/07/2021" },
   { nome: "Paula", dataDaConsulta: "03/11/2021" },
   { nome: "Márcia", dataDaConsulta: "04/05/2021" }
]

//Exercício 19, letra A

function ordenaPorNome() {

}

// Exercício 19, letra B

const consultasData = [
   { nome: "João", dataDaConsulta: "01/10/2021" },
   { nome: "Pedro", dataDaConsulta: "02/07/2021" },
   { nome: "Paula", dataDaConsulta: "03/11/2021" },
   { nome: "Márcia", dataDaConsulta: "04/05/2021" }
]

function ordenaPorData() {

}

//Exercício 20

const contas = [
   { cliente: "João", saldoTotal: 1000, compras: [100, 200, 300] },
   { cliente: "Paula", saldoTotal: 7500, compras: [200, 1040] },
   { cliente: "Pedro", saldoTotal: 10000, compras: [5140, 6100, 100, 2000] },
   { cliente: "Luciano", saldoTotal: 100, compras: [100, 200, 1700] },
   { cliente: "Artur", saldoTotal: 1800, compras: [200, 300] },
   { cliente: "Soter", saldoTotal: 1200, compras: [] }
]

function atualizaSaldo() {
   // implemente sua lógica aqui
}