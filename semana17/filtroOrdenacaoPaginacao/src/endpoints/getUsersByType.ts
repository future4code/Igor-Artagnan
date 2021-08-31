import { Request, Response } from "express"
import { connection } from "../data/connection"



export const getUsersByType = async (req: Request, res: Response): Promise<void> => {
    try {

        const type = req.query.type
        const result = await connection("aula48_exercicio")
            .where("type", "LIKE", `%${type}%`)

        if (result.length <= 0) {
            res.status(201).send("Tipo inválido, tente pesquisar por Operations, CX ou Teacher")
        }

        res.status(200).send(result)


    } catch (error) {
        res.status(500).send('Internal server error')

    }
}

