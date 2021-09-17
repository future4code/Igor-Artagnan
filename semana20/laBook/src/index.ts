import dotenv from 'dotenv'
import { app } from './app'

dotenv.config()

import { UserController } from './controllers/UserController'

const userController = new UserController()

app.post('/users/signup', (request, response) => {
    userController.signup(request, response)
})

app.post('/users/login', (request, response) => {
    userController.login(request, response)
})

