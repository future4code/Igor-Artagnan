import { User } from "../model/User"
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
        const randomID = idGenerator.generateID()

        const hashManager = new HashManager()
        const passwordHash = await hashManager.hash(signupDTO.password)

        const userModel: User = {
            id: randomID,
            email: signupDTO.email,
            name: signupDTO.name,
            passwordHash: passwordHash
        }
    }
}