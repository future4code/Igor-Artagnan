import { Request, Response } from "express"
import { connection } from "../data/connection"
import {selectAllUsers} from "../data/migrations"


export const getLimitedUsers = async(req: Request,res: Response): Promise<void> =>{
    try {
        const page = Number(req.query.page) || 1
        const offset = 10 * page - 1
        const result = await connection("aula48_exercicio") 
        .limit(5)
        .offset(offset)   
        res.status(200).send(result)


    } catch (error) {
        res.status(500).send('Internal server error')

    }
}