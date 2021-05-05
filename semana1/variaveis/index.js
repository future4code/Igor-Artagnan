/*Exercícios de interpretação de código
1. Analise o programa abaixo e diga o que será impresso no console, SEM EXECUTAR o programa.
    let a = 10
    let b = 10

    console.log(b)

    b = 5

    console.log (a, b)

    REPOSTA: No console irá aparecer, primeiramente 10. Depois, 10, 5.


    2. Analise o programa abaixo e diga o que será impresso no console, **SEM EXECUTAR o programa.**

   
    let a = 10
    let b = 20
    c = a
    b = c
    a = b

    console.log(a, b, c)
    ```

    RESPOSTA: O console imprimirá 10, 10 e 10. Pois a = 10, b = c e c = a que é 10.



    3. Analise o programa abaixo, entenda o que ele faz e **sugira melhores nomes para as variáveis**. Lembre-se que devemos escolher nomes significativos, usar o padrão **camelCase**. Alem disso, os nomes não podem começar com números ou caracteres especiais.

    
    let p = prompt("Quantas horas você trabalha por dia?")
    let t = prompt("Quanto você recebe por dia?")
    alert(`Voce recebe ${t/p} por hora`)
    ```

    REPOSTA: Esse programa realiza o cálculo do valor da hora trabalhada.
    Eu reescreveria o código da seguinte forma:
     
    let horasTrabalhadasPorDia = prompt("Quantas horas você trabalha por dia?")
    let valorDiaTrabalhado = prompt("Quanto você recebe por dia?")
    
    alert("Você recebe", x, "reais por dia")
    

*/

/* EXERCÍCIO DE ESCRITA DE CÓDIGO 

1

a) Declare uma variável para armazenar um nome, sem atribuir um valor.

b) Declare uma variável para armazenar uma idade, sem atribuir um valor.

c) Imprima na tela o tipo dessas variáveis que acabou de criar, usando o comando `typeof`.

d) Reflita: por que esse tipo foi impresso? Escreva a resposta em um comentário de código.

e) Pergunte ao usuário seu nome e sua idade, atribuindo esses dois valores às variáveis que acabou de criar.

- 💡  Dica

    Se você receber um erro de código nessa etapa, reflita sobre o tipo de declaração que utilizou.

f) Novamente, imprima na tela o tipo dessas variáveis. O que você notou? Escreva em um comentário de código.

g) Para finalizar, imprima na tela a mensagem: "Olá `nome`,  você tem `idade` anos". Onde `nome` e `idade` são os valores que o usuário inseriu

*/ 

                /* RESOLUÇÃO */


/* let nome;
let idade;   

console.log(typeof nome); 
console.log(typeof idade);    /* RESPOSTA: // // Como não atribuímos nenhum valor à variável, o código não sabe qual tipo ela tem, e portanto considera como indefinido (undefined)
*/
                    

/* const nome = prompt("Olá! Informe seu nome:")

let idade = prompt("Insira a sua idade:")
  
console.log("Olá", nome,"! Você tem", idade, "anos de idade.")   
console.log(typeof nome)
console.log(typeof idade) 
/* RESPOSTA: O Js retornou que as duas variáveis são strings, pois ele lê qualquer informação cedida pelo usuário como string se você não especificá-la usando uma conversão em sua declaração.       */
 


/*
2- 2. Escreva um programa que faça 3 perguntas de Sim ou Não, armazenado em uma variável. Por exemplo: "Você está usando uma roupa azul hoje?". Depois, siga os passos:

    a) Crie três novas variáveis, contendo as respostas

    b) Imprima na tela todas as perguntas seguidas por suas respectivas respostas. Por exemplo:

    ```
    Você está usando uma roupa azul hoje? - SIM */
    
    
     
    /* MINHA RESOLUÇÃO 
    
    alert("Seja bem vindo ao nosso questionário. Responda apenas com SIM ou NÃO.")

    let roupa = prompt("Olá, você está usando uma camiseta?")
                console.log("O usuário está usando camiseta:", roupa)
    let chapeu = prompt("Você está usando chapéu?")            
                console.log("O usuário está usando chapéu?", chapeu)
    let adorno = prompt("Você está usando algum tipo de adorno (colar, brinco, etc...)?") 
                console.log("O usuário está usando algum adorno?", adorno) 
             
     alert("Você está usando uma camiseta hoje? " +roupa)  
     alert("Você está usando chapéu hoje? " +chapeu)           
     alert("Você está usando adornos? " +adorno) */
     
     /*
                 RESOLUÇÃO CHIJO
     const pergunta1 = "Você está usando uma camiseta?"
     const pergunta2 = "Você está usando um chapéu?"
     const pergunta3 = "Você está usando algum adorno"

     const resposta1 = prompt(pergunta1)
           console.log(pergunta1 , "-" , resposta1)
     const resposta2 = prompt(pergunta2)
           console.log(pergunta2 , "-" , resposta2)
     const resposta3 = prompt(pergunta3)
           console.log(pergunta3 , "-" , resposta3)
                                                    */



                                                     
                                                 
     
     /*
     
     
     3. Dadas duas variáveis a e b com valores diferentes, troque o conteúdo delas sem atribuir diretamente os valores!

    ```jsx
    // valores iniciais:
    let a = 10
    let b = 25

    // valores finais:
    a = 25
    b = 10
    ```
*/           

/*
let a = 10
let b = 25
let c;
// c = a; // c = 10
// a = b; // a = 25
// b = c; // b = 10

console.log(a)
console.log(b)
                */

                                 

alert("Bem Vindo a Calculadora Muito Esperta. Aperte OK para continuar.")
let primeiroValor = Number (prompt("Insira o primeiro valor da sua equação:"))
let segundoValor = Number (prompt("Insira o segundo valor da sua equação: ") )
let resultadoSoma = (primeiroValor + segundoValor)
console.log("O resultado da soma entre", primeiroValor, "e", segundoValor, "é de:", resultadoSoma)
let resultadoMultiplicacao = (primeiroValor * segundoValor)
console.log("O resultado da multiplicação entre", primeiroValor, "e", segundoValor, "é de:", resultadoMultiplicacao)
alert("Realizamos a soma e subtração dos valores informados!")
alert(primeiroValor + " somado com " + segundoValor + " é igual a: " + resultadoSoma)
alert(primeiroValor + " multiplicado por " + segundoValor + " é igual a: " + resultadoMultiplicacao)
                                                                                                      
