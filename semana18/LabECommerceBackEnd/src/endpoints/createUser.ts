import { Request, Response } from "express";
import { connection } from "../data/connection";
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

      await connection("User")
      .insert(newUser)

      res.status(201).end()

   }catch (error) {
      res.status(500).end()
  }
}