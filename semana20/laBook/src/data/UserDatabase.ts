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

    async findUserByMail(email: string) {
        const queryResponse = await connection('Labook_user').select('*').where({ email: email })

        const userDB = queryResponse[0]

        if (!userDB) {
            return null
        }

        const user: User = {
            id: userDB.id,
            email: userDB.email,
            name: userDB.name,
            passwordHash: userDB.password_hash,
        }

        return user
    }

}