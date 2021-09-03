import { User } from "../entities/user";
import connection from "../connection"




export class UserDatabase {
    connection: any

    constructor() {
        this.connection = connection
    }

    async create(newUser: User) {
        await this.connection("User")
            .insert(newUser)
    }

    async getAll() {
    
           return this.connection("User").select()
    }


}