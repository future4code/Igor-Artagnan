const colors = require('colors')
let operation = process.argv[2]
let num1 = Number(process.argv[3])
let num2 = Number(process.argv[4])

switch (operation) {
    case "soma":
        console.log(`Resultado: ${num1 + num2}`.green)
        break;
    case "subtração":
        console.log(`Resultado: ${num1 - num2}`.green)
        break;
    case "multiplicação":
        console.log(`Resultado: ${num1 * num2}`.green)
        break;
    case "divisão":
        console.log(`Resultado: ${num1 / num2}`.green)
    
}