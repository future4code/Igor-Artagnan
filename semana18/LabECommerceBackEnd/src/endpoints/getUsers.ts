import { Request, Response } from "express";
import { connection } from "../data/connection";
import { User } from "../entities/user";



export default async function getUsers(
   req: Request,
   res: Response
): Promise<void> {
   try {

      const userDb = await connection("User").select()

      const user = userDb.map(user => {
         return new User(
            user.name,
            user.email,
            user.age,
            user.id
         )
      })

      res.send(user)


   } catch (error) {
      res.status(500).end()
   }
}