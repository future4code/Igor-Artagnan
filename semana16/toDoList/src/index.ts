import express, { Express, Request, Response } from "express";
import cors from "cors";
import { AddressInfo } from "net";
import connection from "./connection";
/* import { accounts } from "./accounts"; */


const app: Express = express();
app.use(express.json());
app.use(cors());

const createUser = async (
   id: string,
   name: string,
   nickname: string,
   email: string
) => {
   await connection
      .insert({ id: id, name: name, nickname: nickname, email: email })

      .into("TodoListUser")
}

app.post("/user", async (req: Request, res: Response) => {
   try {
      await createUser(
         req.body.id,
         req.body.name,
         req.body.nickname,
         req.body.email
      )
      res.status(200).send({ message: "Success" })
   } catch (err) {
      res.status(400).send({ message: err.message })
   }
})





const server = app.listen(process.env.PORT || 3003, () => {
   if (server) {
      const address = server.address() as AddressInfo;
      console.log(`Server is running in http://localhost: ${address.port}`);
   } else {
      console.error(`Failure upon starting server.`);
   }
});