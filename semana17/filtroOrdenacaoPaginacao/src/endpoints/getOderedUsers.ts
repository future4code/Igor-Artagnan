import { Request, Response } from "express"
import { connection } from "../data/connection"
import { selectOrderedUsers } from "../data/migrations"


export const getOrderedUsers = async (req: Request, res: Response): Promise<void> => {
    try {

        const sort = req.query.sort || "email"
        const order = req.query.order || "asc"

        if (sort !== "email" && sort !== "name" && sort !== "type") {
            res.statusCode = 422
            throw new Error("O método de classificação deve ser 'email' , 'name' ou 'type'")
        }

        if (order !== "asc" && order !== "desc") {
            res.statusCode = 422
            throw new Error("O método de ordenação deve ser 'asc' ou 'desc'")
        }

        const result = await connection("aula48_exercicio")
            .orderBy(sort, order)


        if (result.length <= 0) {
            res.status(201).send("Usuário não encontrado.")
        }

        res.status(200).send(result)


    } catch (error) {
        if (res.statusCode === 200) {
            res.status(500).send('Internal server error')
        } else {
            res.send(error.message)
        }


    }
}