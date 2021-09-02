import { Request, Response } from "express";
import { connection } from "../data/connection";
import { Product } from "../entities/product";

export default async function createProduct(
   req: Request,
   res: Response
): Promise<void> {
   try {

      const { name, description, price } = req.body

      if ( !name || !description || !price ){
         res.statusCode = 422
         throw "'name', 'description' e 'price' são campos obrigátorios!"
     }

      const id: string = Date.now() + Math.random().toString()

      const newProduct = new Product(name, description, Number(price), id)

      await connection("Product")
      .insert(newProduct)

      res.status(201).end()

   } catch (error) {
      res.status(500).end()
  }
}