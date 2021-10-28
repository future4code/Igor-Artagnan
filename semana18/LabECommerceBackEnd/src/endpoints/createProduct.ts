import { Request, Response } from "express";
import { ProductDatabase } from "../database/productDatabase";
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

      const productDatabase = new ProductDatabase()
    await productDatabase.create(newProduct)


      res.status(201).end()

   } catch (error) {
      res.status(500).end()
  }
} 