// EXERCÍCIOS DE INTERPRETAÇÃO DE CÓDIGO

//1)

//a) O código realiza a comparação do resto de divisão do número informado pelo usuário dividido por 2. Imprimindo se o número passou ou não pelo teste.

//b) Números pares.

//c) Números ímpares

//2

//a) O código server para informar o preço de uma determinada fruta informada pelo usuário.

//b)"O preço da fruta Maçã R$2.25

//c) Sem o break a leitura não iria parar na condicional "Pêra", informando o valor 5 ao ívens de 5.5.

//3


//a) A primeira linha solicita que o usuário informe um número.

//b) numero = 10 "Esse número passou no teste" 
//   numero = -10 Não apresentará nenhuma mensagem.

//c) Sim, o console retornará que "mensagem" não foi definida, pois ela se encontra dentro do escopo de if, que não compartilha com o escopo global (onde o console.log foi escrito).



//EXERCÌCIOS DE ESCRITA DE CÓDIGO

//1

/*

const legalmenteMotorista = () => {
    const idadeUsuario = Number(prompt`Informe a sua idade: `)

    if (idadeUsuario >= 18){
       
       console.log(`Você pode dirigir!`)   
    
    } else {
        
        console.log(`Você não pode dirigir!`)

    }
}

legalmenteMotorista() */

//2

/*

const verificaTurno = () => {
   turno = prompt(`Informe em qual turno você estuda: M (Matutino), V (Vespertino) ou N (Noturno):`)

   if (turno === 'M') {
       console.log(`Bom dia!`)
       //return `Bom dia!`
   } if (turno === "V"){
       console.log(`Boa tarde!`)
       //return `Boa tarde!`
   } else if (turno === 'N') {
       console.log(`Boa noite!`)
       //return `Boa noite!`

   }
}

verificaTurno() */

//3
/*
const verificaTurno = () => {
    turno = prompt(`Informe em qual turno você estuda: M (Matutino), V (Vespertino) ou N (Noturno):`)
 
    switch (turno){
        case `M`:
            console.log(`Bom dia!`)
            break
        case `V`:
            console.log(`Boa tarde!`)
            break
        case   `N`:
            console.log(`Boa noite!`)      
    }
    
 }
 verificaTurno()
                 */

 //4
 /*

 const cinema = () =>{
      generoFilme = prompt(`Qual é o genero do filme?`).toLocaleLowerCase()
      valorIngresso = Number(prompt(`Qual é o valor do ingresso?`))

      if (generoFilme === `fantasia` && valorIngresso <= 15 ){
          console.log(`Bom filme!`)
      }else {
          console.log(`Escolha outro filme!`)

      }

 }
cinema() */

//                  DESAFIOS

//1 
/*
const cinema = () =>{
   let generoFilme = prompt(`Qual é o genero do filme?`).toLocaleLowerCase()
   let  valorIngresso = Number(prompt(`Qual é o valor do ingresso?`))

    if (generoFilme === `fantasia` && valorIngresso <= 15 ){

        let lanche = prompt (`Qual lanche você irá comprar? `)
        
        console.log(`Bom filme!`)
        console.log(`Aproveite o seu/sua ${lanche}!`)
    }else {
        console.log(`Escolha outro filme!`)

    }

}
cinema() */

//2

let valorDoIngresso
let valorTotalIngresso

let sistemaIngressos = () => {
    let nomeUsuario = prompt('Insira seu nome completo: ')
    let tipoDeJogo = prompt('Qual o tipo de jogo que você deseja assistir? IN (Internacional) ou DO (Doméstico)').toUpperCase()
    let etapaJogo = prompt(`Qual é a etapa do jogo que vocÊ deseja assistir? SF (semi-final), DT (decisa de terceiro lugar) ou FI (final) `).toLocaleUpperCase()
    let categoriaIngresso = Number(prompt('Qual é a categoria de ingresso que você deseja comprar? 1, 2, 3 ou 4?'))
    let quantidadeIngressos = Number(prompt(`Qual é a quantidade de ingressos desejada?`))
    let dadosDaCompra = `
"---Dados da compra---"
Nome do cliente: ${nomeUsuario}
Tipo do jogo: ${tipoDeJogo}
Etapa do jogo: ${etapaJogo}
Categoria: ${categoriaIngresso}
Quantidade de ingressos: ${quantidadeIngressos} ingresso(s)
    `

    !alert(dadosDaCompra)

    let confirmarComprar = prompt('Deseja confirmar sua compra? (Responda com Sim ou Não): ').toLocaleLowerCase()

    if (confirmarComprar === 'sim'){
        if (etapaJogo === 'SF' || tipoDeJogo === 'DO' || categoriaIngresso === 1){
            valorDoIngresso = 1320.00
         
            switch (categoriaIngresso){
                case 2:
                    valorDoIngresso = 880.00
                    
                    break
                case 3:
                    valorDoIngresso = 550.00
                   
                    break
                case 4:
                    valorDoIngresso = 220.00
                            
           } if (etapaJogo === 'DT') {
               switch (categoriaIngresso){
                   case 1:
                       valorDoIngresso = 660.00
                       break
                  case 2:
                      valorDoIngresso = 440.00
                      break
                  case 3:
                      valorDoIngresso = 330.00
                      break
                  case 4:
                      valorDoIngresso = 170.00        
               }

           } if (etapaJogo === 'FI'){
               switch (categoriaIngresso){
                   case 1:
                       valorDoIngresso = 1980.00
                       break
                  case 2:
                      valorDoIngresso = 1320.00
                      break
                  case 3:
                      valorDoIngresso = 880.00
                      break
                  case 4:
                      valorDoIngresso = 330.00         
               }
           } if (tipoDeJogo === 'IN'){
               valorDoIngresso = valorDoIngresso / 4.1

            
              
           }

           
           
           
            valorTotalIngresso = quantidadeIngressos * valorDoIngresso

            let dadosDaCompraNacional = `
---Dados da compra--- 
Nome do cliente: ${nomeUsuario} 
Tipo do jogo: ${tipoDeJogo}
Etapa do jogo:  ${etapaJogo}
Categoria:  ${categoriaIngresso}
Quantidade de Ingressos: ${quantidadeIngressos} 
---Valores--- 
Valor do ingresso: R$${valorDoIngresso}
Valor total: R$${valorTotalIngresso}
            `
        
            console.log(dadosDaCompraNacional)


           
                 


        } 


    } else {

        !alert('Volte Sempre!')

    }
}
sistemaIngressos()