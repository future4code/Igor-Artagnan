const colors = require('colors')
let nome = process.argv[2]
let idade = Number(process.argv[3])

const parametros = process.argv.length - 2

if (parametros < 2) {
  return console.log(`É esperado dois parâmetros, você inseriu ${params}`.red)
}

console.log(`Olá, ${nome}! Você tem ${idade} anos. Em sete anos você terá ${idade + 7}`.green)