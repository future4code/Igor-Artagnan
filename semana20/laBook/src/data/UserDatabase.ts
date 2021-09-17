import { User } from "../model/User";
import { connection } from "./connection";


export class UserDatabase {
    async save(user: User) {
        const userDB = {
            id: user.id,
            email: user.email,
            name: user.name,
            password_hash: user.passwordHash
        }
        await connection('Labook_user').insert(userDB)

        return user

    }

}