//Exercicio 1

//a) Para acessar os parâmetros passados na linha de comando para o Node, usamos o process.argv.

//b)

/* let nome = process.argv[2]
let idade = process.argv[3]

console.log(`Olá, ${nome}! Você tem ${idade} anos.`) */

//c)

/* let nome = process.argv[2]
let idade = Number(process.argv[3])

console.log(`Olá, ${nome}! Você tem ${idade} anos. Em sete anos você terá ${idade + 7}`) */

//Exercício 2

/* let operation = process.argv[2]
let num1 = Number(process.argv[3])
let num2 = Number(process.argv[4])

switch (operation) {
    case "soma":
        console.log(`Resultado: ${num1 + num2}`)
        break;
    case "subtração":
        console.log(`Resultado: ${num1 - num2}`)
        break;
    case "multiplicação":
        console.log(`Resultado: ${num1 * num2}`)
        break;
    case "divisão":
        console.log(`Resultado: ${num1 / num2}`)
    
}
 */

//Exercício 3

/* let tarefas = ["Criar formigas"]
tarefas.push(process.argv[2])
console.log("Tarefa adicionada com sucesso.")
console.log(tarefas) */