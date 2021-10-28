import { Request, Response } from 'express'
import { SignupDTO, UserBusiness } from '../business/UserBusiness'

export class UserController {

    async signup(req: Request, res: Response) {

        try {

            const signupDTO: SignupDTO = {
                name: req.body.name,
                email: req.body.email,
                password: req.body.password,
            }

            if (!signupDTO.name || !signupDTO.email || !signupDTO.password) {
                throw new Error('Preencha todos os campos!')
            }

            const userBusiness = new UserBusiness();

            const output = await userBusiness.signup(signupDTO)
            res.send({token: output.token})


        } catch (error: any) {
            res.status(500).send(error.message)
        }

    }

    async login(req: Request, res: Response){

        const email = req.body.email
        const password = req.body.password

            if (!email || !password) {
                throw new Error('Preencha todos os campos!')
            }

            const userBussines = new UserBusiness();

            const output = await userBussines.login(email, password)

        res.send('Sucesso')

    }

}