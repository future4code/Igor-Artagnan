import express, { Express, Request, Response } from 'express'
import cors from 'cors'
import { AddressInfo } from "net";

type user = {
    name: string,
    cpf: number,
    birthDate: number,
    balance: number, 
}

type spent = [{
    value: number,
    date: number,
    description: string
}]

const registeredUsers: user[]= [
    {
        name: "Igor",
        cpf: 13247845,
        birthDate: 120197,
        balance: 50000

    }
]

const app: Express = express();

app.use(express.json());
app.use(cors());


app.get('/users', (req: Request, res: Response) => {
    let codeError: number = 404
    try {
        res.status(200).send(registeredUsers)
    } catch (error) {
        res.status(codeError).send({ message: error.message })
    }
})







const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
       const address = server.address() as AddressInfo;
       console.log(`Server is running in http://localhost: ${address.port}`);
    } else {
       console.error(`Failure upon starting server.`);
    }
});