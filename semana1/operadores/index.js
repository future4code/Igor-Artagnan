//EXERCICIOS DE INTERPRETAÇÃO DE CÓDIGO

//1-

//a = false
//b = false
//c = true
//d = boolean

//2- Será exibido no console apenas a junção dos dois números informados pelo usuário. Exemplo, se primeiroNumero = 1 e segundoNumero = 1, o console imprimirá 11. Isso ocorre pois o Javascript lê como string qualquer informação inserida pelo usuário no prompt. 


//3 Para que o programa funcione é necessário que transformemos a string inserida pelo usuário em Number:

/* let primeiroNumero = Number(prompt("Digite um numero!"))
let segundoNumero = Number(prompt("Digite outro numero!"))

const soma = primeiroNumero + segundoNumero

console.log(soma)
                      */

//EXERCICIOS DE ESCRITA DE CODIGO

//1

/*
alert('Seja bem vindo(a) a calculadora de diferença etária')
let minhaIdade = prompt('Insira aqui a sua idade: ')
console.log('Sua idade é: ', minhaIdade)
let idadeAmigo = prompt('Insira aqui a idade do seu melhor amigo(a): ')
console.log('A idade do seu amigo(a) é: ', idadeAmigo)
let comparacao;
comparacao = minhaIdade > idadeAmigo
console.log('Sua idade é maior que a do seu melhor amigo(a)? ', comparacao)
let diferenca;
diferenca = minhaIdade - idadeAmigo
console.log('A diferença de idade entre vocês é de: ', diferenca)
 
*/

//2
// a e b:
/*
let valor = Number(prompt('Olá! Insira um numero PAR: '))
console.log('Número: ', valor)
let resultado;
resultado = valor % 2
console.log('O resto da divisão entre ', valor, 'e 2 é de:', resultado)
*/

//c: Todo resultado de um número par será igual a 0, pois não existe resto em divisão entre números pares.
//d: Se o usuário inserir um número ímpar, o resto será igual a 1.

//3
/*
alert('Bem vindo ao conversor de idade!')
let idade = Number(prompt('Insira aqui a sua idade: '))
console.log('Idade do usuário: ', idade)
let meses;
meses = idade * 12
console.log('Você tem ', meses, 'meses de idade.')
let dias;
dias = idade * 365
console.log('Você tem aproximadamente', dias, 'dias de idade')
let horas;
horas = dias * 24
console.log('Você tem aproximadamente', horas, 'vividas até o momento.')
                                                                          */

//4

/*
let primeiroValor = Number(prompt('Insira o primeiro número: '))
let segundoValor  = Number(prompt('Insira o segundo número: '))
console.log('Primeiro número: ', primeiroValor)
console.log('Segundo número: ', segundoValor)
let teste1;
let teste2;
let teste3;
let teste4;
teste1 = primeiroValor > segundoValor
teste2 = primeiroValor === segundoValor
teste3 = (primeiroValor % segundoValor) === 0;
teste4 = (segundoValor % primeiroValor) === 0;
console.log('O primeiro número é maior que o segundo? ', teste1)
console.log('O primeiro numero é igual ao segundo? ', teste2)
console.log('O primeiro numero é divisível pelo segundo?', teste3)
console.log('O segundo numero é divisível pelo primeiro?', teste4)
                                                                     */

                                         //**DESAFIO**

 //1
 
 // a) 77 "ºF (Fahrenheit) equivalem a " 298.15 "K (Graus Kelvin)"
 
 /*
 alert('Conversor de unidade de temperatura')
 let fahrenheit = Number(prompt('Insira o valor em Fahrenheit: '))
 console.log(fahrenheit, 'ºF')
 
 let resultado1;
 resultado1 = (fahrenheit - 32) * (5/9) + 273.15
 console.log(fahrenheit, 'ºF (Fahrenheit) equivalem a ', resultado1, 'K (Graus Kelvin)')  */
 
//b) 80 "Graus Celsius equivalem a" 176 "Graus Fanhrenheit"

/*
 alert('Conversor de unidade de temperatura')
 let celsius = Number(prompt('Insira o valor em Graus Celsius: '))
 console.log(celsius, 'Graus Celsius')
 
 let resultado2;
 resultado2 = (celsius) * (9 / 5) + 32;
 console.log(celsius, 'Graus Celsius equivalem a', resultado2, 'Graus Fanhrenheit') */

 //c) e d) 30 "Graus Celsius equivale a" 86 "Graus Fahrenheit e" 303.15 "Graus Kelvin"
 
 /*
 alert('Conversor de unidade de temperatura')
 let celsius = Number(prompt('Insira o valor em Graus Celsius: '))
 let fahrenheit;
 let Kelvin;
 fahrenheit = (celsius) * (9 / 5) + 32
 Kelvin = celsius + 273.15
 console.log(celsius, 'Graus Celsius equivale a', fahrenheit, 'Graus Fahrenheit e', Kelvin, 'Graus Kelvin') */

 

 //2
 //a) O valor a ser pago por hora será de R$14,00.
/*
 let horaConsumo = Number(prompt('Insira a quantidade de Quilowatt-hora consumida: '))
 let valorPagamento;
 valorPagamento = horaConsumo * 0.05
 console.log('O valor a ser pago por', horaConsumo, 'quilowatt-hora consumidos será de R$',valorPagamento) */

 //b) O valor com desconto será de R$11,90
 /*
 let energiaConsumida = Number(prompt('Insira a quantidade de energia consumida:'))
 let valorPagamento;
 valorPagamento = energiaConsumida * 0.05
 console.log('O valor a ser pago por', energiaConsumida, 'quilowatt-hora consumidos será de R$',valorPagamento)
 let desconto = Number(prompt('Insira a porcentagem de desconto:'))
 let porcentagem;
 porcentagem = 1 - (desconto / 100)
 let valorComDesc
 valorComDesc = valorPagamento - porcentagem
 console.log('O valor com desconto será de ', valorComDesc)
                                                              */


 /* let horaConsumo = Number(prompt('Insira a quantidade de Quilowatt-hora consumida: '))
 let desconto = Number(prompt ('Insira aqui a procentagem de desconto (sem o %): '))
 let valorPagamento;
 valorPagamento = horaConsumo * 0.5
 let calculoComDesconto;
 calculoComDesconto = valorPagamento * (1 - 0,15)
 let valorComDesconto;
 valorComDesconto = valorPagamento - calculoComDesconto
 console.log('Com', desconto, '% de desconto você pagará R$', valorComDesconto) */

 //3
 //a) 20lb equivalem a aproximadamente 9,07kg

 /*
 let libra = Number(prompt('Insira em libra (lb) o valor a ser convertido'))
 console.log(libra, 'libras')
 let kg;
 kg = libra / 2.205
 console.log(libra, 'lb equivalem a', kg, 'kg') //aqui eu precisaria saber um comando para mostrar apenas três casas após a vírgula do resultado.
 alert(libra + 'lb equivalem a ' + kg + ' kg') */

 //b) 10.5 "onças equivale a" 0.29766967171287634 "kg" ou 0.297 kg
 /*
 let onça = Number(prompt('Insira em onças (oz) o valor a ser convertido'))
 console.log(onça, 'onças')
 let kg;
 kg = onça / 35.274
 console.log(onça, 'onças equivale a', kg, 'kg')
 alert(onça + ' onças equivalem a ' + kg + ' kg') */

 //c) 100 milhas equivalem a aproximadamente 160934 metros

 /*
 let milha = Number(prompt('Insira em milhas (mi) o valor a ser convertido:'))
 console.log(milha, 'milhas')
 let metros;
 metros = milha * 1609
 console.log(milha, 'milhas equivalem aproximadamente a', metros,'metros')
 alert(milha + ' milhas equivalem aproximadamente a ' + metros + ' metros') */

 //d) 50ft equivalem a aproximadamente  15,24m

 /*
 let pes = Number (prompt('Insira em pés (ft) o valor a ser convertido:'))
 console.log(pes, 'pés')
 let metros;
 metros = pes / 3.281
 console.log(pes, 'pés equivalem a aproximadamente ', metros, 'metros')
alert(pes + ' pés equivalem a aproximadamente ' + metros + ' metros.') */

//e) 103.56 "galões equivalem a aproximadamente " 39249.24 "litros"

/*
let gal = Number(prompt('Insira em galões (gal) a quantidade a ser convertida:'))
console.log(gal, 'galões')
let litros;
litros = gal * 379
console.log(gal, 'galões equivalem a aproximadamente ', litros, 'litros')
alert(gal + ' galões equivalem a aproximadamente ' + litros + ' litros.') */

//f) 450 "xícaras equivalem a aproximadamente " 67.5 "litros"

/*
let xic = Number(prompt('Insira em xícaras (xic) a quantidade a ser convertida:'))
console.log(xic, 'xícaras')
let litros;
litros = xic * 0.15
console.log(xic, 'xícaras equivalem a aproximadamente ', litros, 'litros')
alert(xic + ' xícaras equivalem a aproximadamente ' + litros + ' litros.') */


