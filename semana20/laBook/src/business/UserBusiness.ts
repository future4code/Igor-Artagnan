import { UserDatabase } from "../data/UserDatabase"
import { User } from "../model/User"
import { Authenticator } from "../services/Auhtenticator"
import { HashManager } from "../services/HashManager"
import { IdGenerator } from "../services/IdGenerator"

export interface SignupDTO {
    name: string
    email: string
    password: string
}

export class UserBusiness {
    async signup(signupDTO: SignupDTO) {

        const idGenerator = new IdGenerator()
        const randomId = idGenerator.generateID()

        const hashManager = new HashManager()
        const passwordHash = await hashManager.hash(signupDTO.password)

        const userModel: User = {
            id: randomId,
            email: signupDTO.email,
            name: signupDTO.name,
            passwordHash: passwordHash
        }

        const userDatabase = new UserDatabase();
        

        const savedUser = await userDatabase.save(userModel)

        const authenticator = new Authenticator()
        const token =authenticator.generate({id: savedUser.id})

        return {
            user: savedUser.name,
            token: token
        }


    }
}