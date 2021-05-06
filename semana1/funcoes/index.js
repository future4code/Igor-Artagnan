//EXERCICIO DE INTERPRETAÇÃO DE CÓDIGO

//1

//a) 10 e 50.
//b) Retornaria um erro, como se minhaFuncao não fosse uma função pois o console não conseguiria lê-la.

//2 
//a) A função irá primeiramente converter a inserção do usuário para lowercase e retornar true ou false para o conjunto de caracteres "cenoura"

//b) i- true
//   ii- true
//   iii- true

/***************************************************************/

//EXERCÍCIO DE ESCRITA DE CÓDIGO

//1

//a)

/*

function myInformations(){
    
    const  nome = 'Igor' 
    const  age =  24
    const  city = 'Uberaba'
    const  amIStudent =  'sou'
   
    const userData = `Eu sou ${nome}, tenho ${age} anos, moro em ${city} e ${amIStudent} estudante`
    
    console.log(userData)

return userData
    
   }

   myInformations()    */


//b)

/*

function myInformations(){
    
    const  nome = prompt('Insira aqui o seu nome: ') 
    const  age =  prompt('Insira aqui sua idade: ') 
    const  city = prompt('Insira aqui a sua cidade: ') 
    const  amIStudent =  prompt('Você é estudante? (responda com "sou" ou "não sou")')
   
    const userData = `Eu sou ${nome}, tenho ${age} anos, moro em ${city} e ${amIStudent} estudante`
    
    console.log(userData)

return userData
    
   }

   myInformations()             */

//2

//a)

/*

function operation( num1, num2){
    const adittion = num1 + num2
    console.log(adittion)

return adittion    
    
}

const result = operation(30,10) */

//b)

/*
function operation( num1, num2){
    const compar = num1 >= num2
    console.log(compar)

return compar    
    
}
const result = operation(3,5) */

//c)
/*

function operation(number){
    const compar = (number % 2) == 0
    console.log(`O número ${number} é par? ${compar}`)

return compar 
}

const result = operation(9) */


//d)
/*
function conver(arrayDeStrings){
   let newArray = []
   let size = arrayDeStrings.length
   let lowercase = arrayDeStrings.toLowerCase()  
   console.log(`A palavra ${lowercase} tem o tamanho de ${size} caracteres  `) 
   return newArray  
}
const final = conver("CAMINHÃO") */

//3

const num1 = Number(prompt('Insira o primeiro número: '))
const num2 = Number(prompt('Insira o segundo número: '))

function addition(num1, num2) {
    const adittion = num1 + num2
    console.log(adittion)

    return adittion
}

function sub(num1, num2) {
    const subtraction = num1 - num2
    console.log(subtraction)

    return subtraction
}

function mult(num1, num2) {
    const multiplication = num1 * num2
    console.log(multiplication)

    return multiplication
}

function div(num1, num2) {
    const division = num1 / num2
    console.log(division)

    return division
}
function result(num1,num2) {
    const add = addition(num1,num2)
    const Subtração = sub(num1,num2)
    const multi = mult(num1,num2)
    const divis = div(num1,num2)
    console.log(`Os resultados são: Soma: ${num1} + ${num2} = ${add}. Subtração: ${num1} - ${num2} = ${Subtração}. Multiplicação: ${num1} x ${num2} = ${multi} e Divisão: ${num1} divido por ${num2} é igual a ${divis}`)

    const resultado = `Os resultados são: Soma: ${num1} + ${num2} = ${add}. Subtração: ${num1} - ${num2} = ${Subtração}. Multiplicação: ${num1} x ${num2} = ${multi} e Divisão: ${num1} divido por ${num2} é igual a ${divis}`

    return resultado
}

result(num1,num2)



//FAREI OS DESAFIOS POSTERIORMENTE













