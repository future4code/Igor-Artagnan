import { Request, Response } from 'express'
import { SignupDTO, UserBusiness } from '../business/UserBusiness'

export class UserController {

    async signup(request: Request, response: Response) {

        try {

            const signupDTO: SignupDTO = {
                name: request.body.name,
                email: request.body.email,
                password: request.body.password,
            }

            if (!signupDTO.name || !signupDTO.email || !signupDTO.password) {
                throw new Error('Preencha todos os campos!')
            }

            const userBusiness = new UserBusiness();

            const output = await userBusiness.signup(signupDTO)
            response.send({token: output.token})


        } catch (error: any) {
            response.status(500).send(error.message)
        }

    }
}