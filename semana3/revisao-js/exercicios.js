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
   const novoArray = [];
   for(let number = 0; novoArray.length < n; number++) {
    if(number % 2 === 0) {
      novoArray.push(number)
    }
   }
   return novoArray
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
   let maiorNumero;
 let menorNumero;
 let maiorDivisivelporMenor;

 if(num1 > num2) {
    maiorNumero = num1;
    menorNumero = num2;
 } else {
    maiorNumero = num2;
    menorNumero = num1;
  }

  maiorDivisivelporMenor = maiorNumero % menorNumero === 0;

  const diferenca = maiorNumero - menorNumero;

  return {
    maiorNumero: maiorNumero,
    maiorDivisivelporMenor: maiorDivisivelporMenor,
    diferenca: diferenca
  }
   

}

// Exercício 10

function segundoMaiorEMenor(array) {
   let menor = Infinity
 let maior = 0
 let segundoMenor = Infinity
 let segundoMaior = 0
 let indiceMenor = 0
 let indiceMaior = 0
 let novoArray = []

 for(let i of array) {
  if(i < menor) {
     menor = i
     indiceMenor = array.indexOf(menor)
  } 
  if(i > maior) {
     maior = i
     indiceMaior = array.indexOf(maior)
     }
  }
   array.splice(indiceMaior, 1)
   array.splice(indiceMenor, 1)

  for(let i of array) {
   if(i < segundoMenor) {
     segundoMenor = i
  }
  if(i > segundoMaior) {
     segundoMaior = i
  }
 }
  novoArray.push(segundoMaior)
  novoArray.push(segundoMenor)

  return novoArray
}

//Exercício 11

function ordenaArray(array) {
   
      const len = array.length;
      for(let i = 0; i < len; i++) {
       for(let j = 0; j < len; j++) {
        if(array[j] > array[j + 1]) {
         let tmp = array[j];
          array[j] = array[j + 1];
          array[j + 1] = tmp;
         }
        }
       }
     return array
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
   const filme = {
      nome: 'O Diabo Veste Prada',
      ano: 2006,
      diretor: 'David Frankel',
      atores: ['Meryl Streep', 'Anne Hathaway', 'Emily Blunt', 'Stanley Tucci']
  }

 let atoresConcat = ""
 for(let i = 0; i < filme.atores.length; i++) {
  if(i === filme.atores.length - 1) {
    atoresConcat += filme.atores[i]
  } else {
     atoresConcat += filme.atores[i] + ", "
    }
  }

  return `Venha assistir ao filme ${filme.nome}, de ${filme.ano}, dirigido pOr ${filme.diretor} e estrelado por ${atoresConcat}.`
}

// Exercício 14

function criaRetangulo(lado1, lado2) {
   const retangulo = {
      largura: lado1,
       altura: lado2,
       perimetro: 2 * (lado1 + lado2),
       area: lado1 * lado2
     }
   
     return retangulo
}

// Exercício 15

function anonimizaPessoa(pessoa) {
   return {
      ...pessoa, 
      nome: 'ANÔNIMO'
     }

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
   const novoArray = arrayDePessoas.filter((pessoa) => {
      return pessoa.idade >= 18
     })
     return novoArray
}

// Exercício 16, letra B

function menoresDe18(arrayDePessoas) {
   const novoArray = arrayDePessoas.filter((pessoa) => {
      return pessoa.idade < 18
      })
     return novoArray
}

// Exercício 17, letra A

function multiplicaArrayPor2(array) {
   const novoArray = array.map((num) => {
      return num * 2
      })
     return novoArray
}

// Exercício 17, letra B

function multiplicaArrayPor2S(array) {
   const novoArray = array.map((num) => {
      return(num * 2).toString()
      })
     return novoArray
}

// Exercício 17, letra C

function verificaParidade(array) {
   const novoArray = array.map((num) => {
      if (num % 2 === 0) {
        return `${num} é par`
      } else {
        return `${num} é ímpar`
      }
    })
  
    return novoArray
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
   let pessoasAutorizadas = [];
   for(const pessoa of pessoas) {
     if(pessoa.altura >= 1.5 && pessoa.idade > 14 && pessoa.idade < 60) {
       pessoasAutorizadas.push(pessoa)
     }
   }
   return pessoasAutorizadas;
}


// Exercício 18, letra B

function retornaPessoasNaoAutorizadas() {
   let pessoasNaoAutorizadas = [];
  for(const pessoa of pessoas) {
    if(pessoa.altura < 1.5 || pessoa.idade < 14 || pessoa.idade > 60) {
      pessoasNaoAutorizadas.push(pessoa)
    }
  }
  return pessoasNaoAutorizadas;
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
   for(let i = 0; i < consultasNome.length; i++) {
      for(let j = 0; j < consultasNome.length - i - 1; j++) {
        if(consultasNome[j].nome > consultasNome[j + 1].nome) {
          const temp = consultasNome[j]
          consultasNome[j] = consultasNome[j + 1]
          consultasNome[j + 1] = temp
        }
      }
    }
    return consultasNome

}

// Exercício 19, letra B

const consultasData = [
   { nome: "João", dataDaConsulta: "01/10/2021" },
   { nome: "Pedro", dataDaConsulta: "02/07/2021" },
   { nome: "Paula", dataDaConsulta: "03/11/2021" },
   { nome: "Márcia", dataDaConsulta: "04/05/2021" }
]

function ordenaPorData() {

   for(let i = 0; i < consultasData.length; i++) {
      for(let j = 0; j < consultasData.length - i - 1; j++) {
  
        const arrayData1 = consultasData[j].dataDaConsulta.split('/')
        const dia1 = Number(arrayData1[0])
        const mes1 = Number(arrayData1[1])
        const ano1 = Number(arrayData1[2])
  
        const arrayData2 = consultasData[j + 1].dataDaConsulta.split('/')
        const dia2 = Number(arrayData2[0])
        const mes2 = Number(arrayData2[1])
        const ano2 = Number(arrayData2[2])
  
        const data1 = new Date(ano1, mes1 -1, dia1).getTime()
        const data2 = new Date(ano2, mes2-1, dia2).getTime()
  
        if(data1 > data2) {
          const temp = consultasData[j]
          consultasData[j] = consultasData[j + 1]
          consultasData[j + 1] = temp
        }
      }
    }
    return consultasData

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
   contas.forEach((conta) => {
      let totalDeCompras = 0
      conta.compras.forEach((valor) => {
        totalDeCompras += valor
      })
      conta.saldoTotal -= totalDeCompras
    })
    return contas
}