// Exemplos

// Exercício 0A

function soma(num1, num2) {
   // implemente sua lógica aqui
   return num1 + num2
}

// Exercício 0B

function imprimeMensagem() {
   // implemente sua lógica aqui
   const mensagem = prompt('Digite uma mensagem!')

   console.log(mensagem)
}

// Exercícios

//Exercício 1

function calculaAreaRetangulo() {
   let altura = Number(prompt('Digite a altura: '))
   let largura = Number(prompt('Digite a largura: '))
   let calculo = largura * altura
   console.log(calculo)
}

//Exercício 2

function imprimeIdade() {
   let anoAtual = Number(prompt(`Digite o ano em que estamos: `))
   let anoNascimento = Number(prompt(`Digite o ano em que você nasceu: `))
   let idade = anoAtual - anoNascimento
   console.log(idade)
}

//Exercício 3

function calculaIMC(peso, altura) {
   let imc = peso / (altura * altura)
   return imc

}
//console.log(calculoIMC(85,1.8))
//console.log(calculaIMC(70,1.65))

//Exercício 4

function imprimeInformacoesUsuario() {
   let name = prompt(`Informe aqui seu nome: `)
   let age = Number(prompt(`Informe aqui a sua idade: `))
   let email = prompt(`Digite aqui o seu email: `)

   console.log(`Meu nome é ${name}, tenho ${age} anos, e o meu email é ${email}.`)


}
//imprimeInformacoesUsuario('Alice', 28, 'alice@gmail.com')

//Exercício 5

function imprimeTresCoresFavoritas() {
   let array = []
   let firstColor = prompt(`Qual a sua primeira cor favorita? `)
   let secColor = prompt(`Qual a sua segunda cor favorita? `)
   let thirdtColor = prompt(`Qual a sua terceira cor favorita?`)
   array = [firstColor, secColor, thirdtColor]
   console.log(array)

}

//Exercício 6

function retornaStringEmMaiuscula(string) {
   return string.toUpperCase()
}


//Exercício 7

function calculaIngressosEspetaculo(custo, valorIngresso) {

   let vendas = custo / valorIngresso
   console.log(`Para cobrir o custo do espetáculo, ${vendas} ingressos deverão ser vendidos.`)
   return vendas
}
calculaIngressosEspetaculo(3000, 100)
calculaIngressosEspetaculo(5500, 50)


// Exercício 8

function checaStringsMesmoTamanho(string1, string2) {
   let arrayUm = [string1]
   let arrayDois = [string2]
   let sameSize = (string1.length) === (string2.length)

   return sameSize
}
checaStringsMesmoTamanho('abc', 'abcd')

// Exercício 9

function retornaPrimeiroElemento(array) {
   primeiroElemento = array[0]
   console.log(primeiroElemento)
   return primeiroElemento
}
//retornaPrimeiroElemento(1,2,3)

// Exercício 10

function retornaUltimoElemento(array) {
   let arrayUm = array[array.length - 1]
   console.log(arrayUm)
   return arrayUm

}



//Exercício 11

function trocaPrimeiroEUltimo(array) {
   primeiroElemento = array[0]
   array[0] = array[array.length - 1]
   array[array.length - 1] = primeiroElemento

   return array


}

// Exercício 12

function checaIgualdadeDesconsiderandoCase(string1, string2) {
   primeiraString = string1.toUpperCase()
   segundaString = string2.toUpperCase()
   let saoIguais = primeiraString === segundaString
   return saoIguais

}

// Exercício 13

function checaRenovacaoRG() {

   const anoAtual = Number(prompt(`Qual é o ano em que estamos?`))
   const anoNasc = Number(prompt(`Qual foi o ano em que você nasceu?`))
   const emissaoID = Number(prompt(`Em que ano sua carteira de identidade foi emitida??`))

   const idade = anoAtual - anoNasc
   const tempoID = anoAtual - emissaoID

   const condicao1 = idade <= 20 && tempoID >= 5
   const condicao2 = idade > 20 && idade <= 50 && tempoID >= 10
   const condicao3 = idade > 50 && tempoID >= 15

   console.log(condicao1 || condicao2 || condicao3)


}

// Exercício 14

function checaAnoBissexto(ano) {
   let condicao1 = ano % 400 === 0
   console.log(condicao1)
   let condicao2 = (ano % 4 === 0) && (ano % 100 !== 0)
   return condicao1 || condicao2

}

// Exercício 15

function checaValidadeInscricaoLabenu(pessoa) {
   let idade = prompt(`Você tem mais de 18 anos?`)
   let ensino = prompt(`Você possui ensino médio completo?`)
   let disponibilidade = prompt(`Você possui disponibilidade exclusiva durante os horários do curso?`)
   let comp1 = (idade === 'sim')
   let comp2 = (ensino === 'sim')
   let comp3 = (disponibilidade === 'sim')
   let comp4 = comp1 === comp2 === comp3
   console.log(comp4)
   return comp4
}

