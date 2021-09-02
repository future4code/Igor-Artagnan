import { Request, Response } from "express";
import { connection } from "../data/connection";
import { User } from "../entities/user";


export default async function createUser(
   req: Request,
   res: Response
): Promise<void> {
   try {

      const { name, email, age } = req.body

      const id: string = Date.now() + Math.random().toString()

      const newUser = new User(name, email, Number(age), id)

      await connection('User')
      .insert(newUser)

   } catch (error) {

      if (typeof error === "string") {

         res.send(error)
      } else {

         console.log(error.sqlMessage || error.message);
         res.status(500).send("Ops! Um erro inesperado ocorreu =/")
      }

   }
}