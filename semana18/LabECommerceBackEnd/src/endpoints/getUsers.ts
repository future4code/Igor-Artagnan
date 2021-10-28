import { Request, Response } from "express";
import { UserDatabase } from "../database/userDatabase";
import { User } from "../entities/user";
import { UserDb } from "../types";



export default async function getUsers(
   req: Request,
   res: Response
): Promise<void> {
   try {

      const userDatabase = new UserDatabase()

      const userDb: UserDb[] = await userDatabase.getAll()

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