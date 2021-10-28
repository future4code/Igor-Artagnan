import { Request, Response } from "express";
import { signupBusiness } from "../../bussines/users/signupBusiness";


export const signupController = async(
    req: Request,
    res: Response
) => {
    try {
        const { name, email, password, role } = req.body

        
        const token = await signupBusiness({ name, email, password, role })

        res
            .status(201)
            .send({
                message: "Usuário criado!",
                token
            })

    } catch (error) {
        res.status(400).send("Tente novamente.")
    }
}