import express, { Request, Response } from 'express'
import cors from 'cors'
import { countries } from './data'

const app = express()

//Middlewares

//Converte o body das nossas respostas para o formato json
app.use(express.json())

//Evita o erro de Cors
app.use(cors())

//Função que faz o servidor escutar alguma porta da nossa máquina
app.listen(3003, () => { console.log("Servidor funcionando em http://localhost:3003") })

//Endpoint que retorna todos os países

const result = countries.map(country => ({
    id: country.id,
    name: country.name
  }))

app.get('/countries', (req: Request, res: Response) => [
    res.send(result).status(200)
])