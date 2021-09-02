import { Request, Response } from "express";
import { connection } from "../data/connection";
import { Product } from "../entities/product";



export default async function createProduct(
   req: Request,
   res: Response
): Promise<void> {
   try {

      const { name, description, price } = req.body

      const id: string = Date.now() + Math.random().toString()

      const newProduct = new Product(name, description, Number(price), id)

      await connection('Product')
      .insert(newProduct)

   } catch (error) {

      if (typeof error === "string") {

         res.send(error)
      } else {

         console.log(error.sqlMessage || error.message);
         res.status(500).send("Ops! Um erro inesperado ocorreu =/")
      }

   }
}