import { Request, Response } from "express";
import { UserDatabase } from "../database/userDatabase";


import { User } from "../entities/user";

export default async function createUser(
   req: Request,
   res: Response
): Promise<void> {
   try {

      const { name, email, age } = req.body

      if ( !name || !email || !age ){
         res.statusCode = 422
         throw "'name', 'email' e 'age' são campos obrigátorios!"
     }

      const id: string = Date.now() + Math.random().toString()

      const newUser = new User(name, email, Number(age), id)

     const userDatabase = new UserDatabase()
    await userDatabase.create(newUser)

      res.status(201).end()

   }catch (error) {
      res.status(500).end()
  }
}