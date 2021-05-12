//EXERCÍCIOS DE INTERPRETAÇÃO DE CÓDIGO

//1) 

//a) Primeiro console.log: Matheus Nachtergaele
//   Segundo console.log: Virginia Cavendish
//   Terceiro console.log: {canal: "Globo", horário: "19h"}

//2) 

//a)  Primeiro console.log: nome : "Juca", idade: 3, raca: "SRD"
//   Segundo console.log: nome: "Juba", idade: 3, raca: "SRD"
//   Terceiro console.log: nome: "Jubo", idade: 3, raca: "SRD"

//b) O "..." (spread) copia todas as informações contidas no objeto mencionado após ele.

//3)

//a) Será impresso "false" e "undefined"

//b) O primeiro valor é o resultado (em booleano) do que foi atribuído a variável "backender". O segundo retorna "undefined" pois não foi definido nenhum valor a uma variável de nome "altura".

//EXERCÍCIOS DE ESCRITA DE CÓDIGO

//1)

//a)

/*
const pessoa = {
    nome: "Igor",
    apelidos: ["apelido1", "apelido2", "apelido3"]
}

function recebeObjeto (pessoa){
    
    console.log(`Eu sou ${pessoa.nome}, mas pode me chamar de: ${pessoa.apelidos[0]}, ${pessoa.apelidos[1]} ou ${pessoa.apelidos[2]}.`)

     
}

recebeObjeto(pessoa)

//b)

const novoApelido = {
    ...pessoa, apelidos: ["APELIDO4", "APELIDO5", "APELIDO"]
}


recebeObjeto(novoApelido) */

//2)

/*

const primeiraPessoa = {
    nome: 'Carlos',
    idade: 33,
    profissao: 'mecânico'
}

const segundaPessoa = {
    nome: 'Mariana',
    idade: 23,
    profissao: 'médica'
}

function identidade(pessoa){
    let caracNome = pessoa.nome.length
    let caracProfisao = pessoa.profissao.length
    let retorno = [pessoa.nome, caracNome, pessoa.idade, pessoa.profissao, caracProfisao]
    console.log(retorno)
  
    //return retorno
    
}

identidade(primeiraPessoa)
identidade(segundaPessoa)  */

//3
/*
let carrinho = []

const itemUm = {
    nome: 'Mamão',
    disponibilidade: true
}

const itemDois = {
    nome: 'Banana',
    disponibilidade: true
}

const itemTres = {
    nome: 'Uva',
    disponibilidade: true
}

function recebeFrutas (){
    carrinho.push(itemUm, itemDois, itemTres)
    console.log(carrinho)

}

recebeFrutas(itemUm,itemDois,itemTres) */


//                    DESAFIOS


//1)
/*
function perguntaUsuario(){
    let nome = prompt(`Informe seu nome:`)
    let idade = Number(prompt(`Qual é a sua idade?`))
    let profissao = prompt(`Qual é a sua profissão?`)

    let dadosUsuario = {
        dados: `nome: ${nome}, profissão: ${profissao}, idade ${idade}`
    
    }
    console.log(dadosUsuario)
    
   
    
    

    return dadosUsuario

}

perguntaUsuario()
let dadosUsuario = perguntaUsuario()
console.log(typeof dadosUsuario)
                                    */

//2)
/*
filmeUm = {
    nome: `Taxi Driver`,
    anoLancamento: 1976
}

filmeDois = {
    nome: `The Warriors`,
    anoLancamento: 1979
}

function comparacaoLancamento(filmeUm, filmeDois) {
    let primeiroSegundo = filmeUm.anoLancamento <= filmeDois.anoLancamento
    let segundoPrimeiro = filmeUm.anoLancamento === filmeDois.anoLancamento

    console.log(`O primeiro filme foi lançado antes do segundo? ${primeiroSegundo}`)
    console.log(`O primeiro filme foi lançado no mesmo ano do segundo? ${segundoPrimeiro}`)
}
comparacaoLancamento(filmeUm, filmeDois)  */

//3

let carrinho = []

const itemUm = {
    nome: 'Mamão',
    disponibilidade: true
}

const itemDois = {
    nome: 'Banana',
    disponibilidade: true
}

const itemTres = {
    nome: 'Uva',
    disponibilidade: true
}

function recebeFrutas (){
    carrinho.push(itemUm, itemDois, itemTres)
    console.log(carrinho)

}

function controleEstoque(fruta){
  let controle = !fruta.disponibilidade
  console.log(controle)
  return controle
}


recebeFrutas(itemUm,itemDois,itemTres)
controleEstoque(itemUm)

















