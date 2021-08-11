import express from 'express'
import cors from 'cors'

const app = express()

//Middlewares

//Converte o body das nossas respostas para o formato json
app.use(express.json())

//Evita o erro de Cors
app.use(cors())

//Função que faz o servidor escutar alguma porta da nossa máquina
app.listen(3003, ()=>{console.log("Servidor funcionando em http://localhost:3003")})