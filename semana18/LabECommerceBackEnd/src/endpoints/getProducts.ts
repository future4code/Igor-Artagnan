import { Request, Response } from "express";
import { ProductDatabase } from "../database/productDatabase";

import { Product } from "../entities/product";
import { ProductsDb } from "../types";


export default async function getProducts(
   req: Request,
   res: Response
): Promise<void> {
   try {

      const productDatabase = new ProductDatabase()
      const productsDb: ProductsDb[] = await productDatabase.getAll()

      const products = await productsDb.map(product =>{
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