import { Request, Response } from "express";
import { connection } from "../data/connection";
import { Product } from "../entities/product";


export default async function getProducts(
   req: Request,
   res: Response
): Promise<void> {
   try {

      const productsDb = await connection("Product").select()

      const products = productsDb.map(product =>{
         return new Product (    
            product.name,
            product.description,
            product.price,
            product.id
         )
      })

      res.send(products)


   } catch (error) {
      res.status(500).end()
  }
} 