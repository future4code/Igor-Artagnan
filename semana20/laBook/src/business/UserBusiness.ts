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

        const userDatabase = new UserDatabase();

        const userWithEmail = userDatabase.findUserByMail(signupDTO.email)

        if (userWithEmail) {
            throw new Error('Usuário já cadastrado.')
        }

        const userModel: User = {
            id: randomId,
            email: signupDTO.email,
            name: signupDTO.name,
            passwordHash: passwordHash
        }


        const savedUser = await userDatabase.save(userModel)

        const authenticator = new Authenticator()
        const token = authenticator.generate({ id: savedUser.id })

        return {
            user: savedUser.name,
            token: token
        }
    }

    async login(email: string, password: string) {
        const userDatabase = new UserDatabase();

        const login = await userDatabase.findUserByMail(email)

        if (!login) {
            throw new Error('Usuário não cadastrado.')

        }

        const hashManager = new HashManager()

        const isPasswordCorrect = await hashManager.compare(password, login.passwordHash)

        if (!isPasswordCorrect) {
            throw new Error('Senha incorreta')
        }

        const authenticator = new Authenticator()
        const token = authenticator.generate({ id: login.id })

        return {
            token: token,
            user: login
        }


    }
}