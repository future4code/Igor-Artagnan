import express, { Express, Request, Response } from "express";
import cors from "cors";
import { AddressInfo } from "net";
import createUser from "./endpoints/createUser";
import getUserById from "./endpoints/getUserById";
import editUser from "./endpoints/editUser";
import createTask from "./endpoints/createTask";
import getTaskById from "./endpoints/getTaskById";
/* import { accounts } from "./accounts"; */


const app: Express = express();
app.use(express.json());
app.use(cors());

//Tabelas criadas por mim no SQL

/* 
CREATE TABLE TodoListUser(
id MEDIUMINT NOT NULL AUTO_INCREMENT PRIMARY KEY,
name VARCHAR(255) NULL,
nickname VARCHAR(255) UNIQUE NOT NULL,
email VARCHAR(255) UNIQUE NOT NULL
);

DELETE FROM TodoListUser;

CREATE TABLE TodoListTask (
id VARCHAR(255) PRIMARY KEY, 
title VARCHAR(255) NOT NULL, 
description TEXT NOT NULL, 
status VARCHAR(255) NOT NULL DEFAULT "to_do",
limit_date DATE NOT NULL,
creator_user_id MEDIUMINT NOT NULL,
FOREIGN KEY (creator_user_id) REFERENCES TodoListUser(id)
);

CREATE TABLE TodoListResponsibleUserTaskRelation(
task_id VARCHAR(255),
responsible_user_id MEDIUMINT NOT NULL,
FOREIGN KEY (task_id) REFERENCES TodoListTask(id),
FOREIGN KEY (responsible_user_id) REFERENCES TodoListUser(id)
);

SELECT * FROM TodoListUser;
*/

/* const createUser = async (
   name: string,
   nickname: string,
   email: string
) => {
   await connection
      .insert({ name: name, nickname: nickname, email: email })

      .into("TodoListUser")
}

app.post("/user", async (req: Request, res: Response) => {
   try {
      await createUser(
         
         req.body.name,
         req.body.nickname,
         req.body.email
      )
      res.status(200).send({ message: "Success" })
   } catch (err) {
      res.status(400).send({ message: err.message })
   }
})

const getUserById = async (id: string): Promise<any> => {
   const result = await connection.raw(`
   SELECT * FROM TodoListUser WHERE id = '${id}'
   `)

   return result[0][0]

}

app.get("/user/:id", async (req: Request, res: Response) => {
   try {

      const id = req.params.id
      const user = await getUserById(id)
      res.status(200).send(user)

   } catch (err){
      res.status(400).send({message: err.message})

   }
})

const updateUserInfo = async (name: string, nickname: string, id: string): Promise<any> =>{
   const result = await connection("TodoListUser")
   .update({name: name, nickname: nickname})
   .where("id", id)
}

app.put("/user/edit/:id", async (req: Request, res: Response) => {
   try {
      await updateUserInfo(req.params.id, req.body.name, req.body.nickname)
      res.status(200).send({message: "Success!"})
   } catch (err) {
      res.status(400).send({message: err.message})
   }
})
 */

app.put('/user', createUser)
app.get('/user/:id', getUserById)
app.post('/user/edit/:id', editUser)
app.put('task', createTask)
app.get('/task/:id', getTaskById)



const server = app.listen(process.env.PORT || 3003, () => {
   if (server) {
      const address = server.address() as AddressInfo;
      console.log(`Server is running in http://localhost: ${address.port}`);
   } else {
      console.error(`Failure upon starting server.`);
   }
});