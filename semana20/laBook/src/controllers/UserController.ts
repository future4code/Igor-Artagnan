import { Request, Response } from 'express'
import { SignupDTO, UserBusiness } from '../business/UserBusiness'

export class UserController {
    signup(request: Request, response: Response) {

        try {

            const signupDTO: SignupDTO = {
                name: request.body.name,
                email: request.body.email,
                password: request.body.password,
            }
            if (!signupDTO.name || !signupDTO.email || signupDTO.password) {
                throw new Error('Preencha todos os campos!')
            }
            const userBusiness = new UserBusiness()

            userBusiness.signup(signupDTO)
            response.send('Sucesso')

        } catch (error: any) {
            response.status(500).send(error.message)
        }

    }
}