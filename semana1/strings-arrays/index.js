//                                             *EXERCÍCIOS DE INTERPRETAÇÃO DE CÓDIGO*

//1
//a) O console retornará a. undefined pois a array foi colocada no código como uma variável sem definição.
//b) O console retornará b. null (vazio)
//c) O console retornará c. 11, que é a quantidade (tamanho do conteúdo) de strings inseridas dentro da array.
//d) O console retornará um erro pois nada foi definido para a array no código.
//e) O console retornará erro pois a pois a array foi colocada no código como uma variável sem definição.

//2 O valor impresso no console será: "SUBI NUM ONIBUS EM MIRROCOS" 27.

//                                                *EXERCÍCIOS DE ESCRITA DE CÓDIGO*

//1

/*
let nomeDoUsuario = prompt('Informe seu nome: ')
console.log(nomeDoUsuario)
let emailDoUsuario = prompt('Insira seu e-mail aqui:')
console.log(emailDoUsuario.trim())
alert(`O e-mail ${emailDoUsuario.trim()} foi cadastrado com sucesso. Seja bem-vinda(o), ${nomeDoUsuario}!`) */

//2

//a)

/*
const comidaFavorita = ['Pizza', ' Açaí', ' Bife acebolado', ' Torta', ' Macarronada']
console.log(comidaFavorita)
alert(`Essas são as minhas comidas favoritas: ${comidaFavorita}`) */



//b)
/*
const comidaFavorita = ['Pizza', 'Açaí', 'Bife acebolado', 'Torta', 'Macarronada']
console.log(comidaFavorita)
alert(`Essas são as minhas comidas favoritas:
${comidaFavorita[0]} 
${comidaFavorita[1]}
${comidaFavorita [2]}
${comidaFavorita[3]}
${comidaFavorita[4]}`) */

//c)
/*
const comidaFavorita = ['Pizza', 'Açaí', 'Bife acebolado', 'Torta', 'Macarronada']
                     
console.log(comidaFavorita)
let comidaUsuario = prompt('Insira a sua comida favorita: ')
console.log(comidaUsuario)
comidaFavorita[1] = comidaUsuario
alert(`Essas são as minhas comidas favoritas:
${comidaFavorita[0]} 
${comidaFavorita[1]}
${comidaFavorita [2]}
${comidaFavorita[3]}
${comidaFavorita[4]}`)  */

//3
/*
let listaDeTarefas = []

let tarefasDoDiaUm = prompt('Insira aqui primeira tarefas do dia: ')
let tarefasDoDiaDois = prompt('Insira aqui segunda tarefas do dia: ')
let tarefasDoDiaTres = prompt('Insira aqui terceira tarefas do dia: ')
console.log(tarefasDoDiaUm, tarefasDoDiaDois, tarefasDoDiaTres)
alert(`As tarefas a serem realizadas hoje são:
${tarefasDoDiaUm}
${tarefasDoDiaDois}
${tarefasDoDiaTres}`)
listaDeTarefas = [tarefasDoDiaUm , tarefasDoDiaDois , tarefasDoDiaTres]
console.log(listaDeTarefas)

let realizada = prompt("Insira qual das tarefas você já realizou (1, 2 ou 3): ")
console.log('Tarefa realizada: ', realizada)

listaDeTarefas.splice(0, realizada)
console.log(`As tarefas restantes são: ${listaDeTarefas} `)
alert(`As tarefas restantes são: ${listaDeTarefas}`)    */

//                                  *DESAFIO EM ANDAMENTO

//1
/*
let frase = [prompt('Insira sua frase aqui: '), ]
console.log(frase)
console.log(frase[0].trim(0))
console.log(frase)
console.log(frase.length)
                          */

