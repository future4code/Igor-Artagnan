import { Request, Response } from "express";
import { connection } from "../data/connection";


export default async function createProduct(
   req: Request,
   res: Response
): Promise<void> {
   try {


   } catch (error) {

      if (typeof error === "string") {

         res.send(error)
      } else {

         console.log(error.sqlMessage || error.message);
         res.status(500).send("Ops! Um erro inesperado ocorreu =/")
      }

   }
}