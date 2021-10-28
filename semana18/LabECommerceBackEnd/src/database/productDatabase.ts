import { Product } from "../entities/product";
import connection from "../connection"




export class ProductDatabase {
    connection: any

    constructor() {
        this.connection = connection
    }

    async create(newProduct: Product) {
        await this.connection("Product")
            .insert(newProduct)
    }

    async getAll() {
    
           return this.connection("Product").select()
    }


}