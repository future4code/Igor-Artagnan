import express, { Express, Request, Response } from 'express'
import cors from 'cors'
import { AddressInfo } from 'net'

type user = {
    id: number,
    name: string,
    email: string,
    type: string,
    age: number
}

let users: user[] = [
    {
        id: 1,
        name: "Alice",
        email: "alice@email.com",
        type: "ADMIN",
        age: 12
    },
    {
        id: 2,
        name: "Bob",
        email: "bob@email.com",
        type: "NORMAL",
        age: 36
    },
    {
        id: 3,
        name: "Coragem",
        email: "coragem@email.com",
        type: "NORMAL",
        age: 21
    },
    {
        id: 4,
        name: "Dory",
        email: "dory@email.com",
        type: "NORMAL",
        age: 17
    },
    {
        id: 5,
        name: "Elsa",
        email: "elsa@email.com",
        type: "ADMIN",
        age: 17
    },
    {
        id: 6,
        name: "Fred",
        email: "fred@email.com",
        type: "ADMIN",
        age: 60
    }
]

const app: Express = express()

app.use(express.json())
app.use(cors())

//Exercício 1
//a) O método a ser utilizado será o GET.
//b) A entidade a ser manipulada será indicada com '/users'

app.get('/users', (req: Request, res: Response) => {
    let codeError: number = 404
    try {
        res.status(200).send(users)
    } catch (error) {
        res.status(codeError).send({ message: error.message })
    }
})

















const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
        const address = server.address() as AddressInfo
        console.log(`Server is running in http://localhost: ${address.port}`)
    } else {
        console.log('Failure upon starting server')
    }
})