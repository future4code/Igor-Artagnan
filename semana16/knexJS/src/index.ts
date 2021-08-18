import express, { Express, Request, Response } from "express";
import cors from "cors";
import { AddressInfo } from "net";
import { connection } from "./connection";


const app: Express = express();
app.use(express.json());
app.use(cors());


app.get("/users/:id", async (req: Request, res: Response) => {
    try {
      const id = req.params.id
  
      console.log(await getActorById(id))
  
      res.end()
    } catch (error) {
          console.log(error.message)
      res.status(500).send("Unexpected error")
    }
  })

   const getActorById = async (id: string): Promise<any> => {
    const result = await connection.raw(`
      SELECT * FROM Actor WHERE id = '${id}'
    `)
  
      return result[0][0]
  }

  /* getActorById("001")
	.then(result => {
		console.log(result)
	})
	.catch(err => {
		console.log(err)
	}); */

    const getActorByName = async (name: string): Promise<any> => {
        const result = await connection.raw(`
        SELECT * FROM Actor WHERE name= '${name}'
        `)
        return result[0][0]
    }

    /* getActorByName("Alessandra Negrini")
    .then(result =>{ console.log(result)})
    .catch(err => {console.log(err)}) */
 
const getActorsByGender = async (gender: string): Promise<any> =>{
    const result = await connection.raw(`
    SELECT COUNT (*) as count FROM Actor WHERE gender = '${gender}'
    `)

    const count = result[0][0].count;
    return count;
}

/* getActorsByGender("female")
    .then(result =>{ console.log(result)})
    .catch(err => {console.log(err)}) */

const updateActorInfo = async (id: string, salary: number): Promise<any> =>{
    const result = await connection("Actor")
    .update({salary: salary})
    .where("id", id)
}

/* updateActorInfo('002', 30000)
.then(result => {console.log(result);
})
.catch(err => {console.log(err);
}) */

const deleteActor = async (id: string): Promise<any> => {
    const result = await connection("Actor")
    .delete()
    .where("id", id)
}

/* deleteActor("004")
.then(result => {console.log(result);})
.catch(err => {console.log(err);}) */

const avgSalaryByGender = async (gender: string): Promise<any> => {
    const result = await connection("Actor")
    .avg("Salary as average")
    .where({gender})
    return result[0].average
}

/* avgSalaryByGender("female")
.then(result => {console.log(result);})
.catch(err => {console.log(err);}) */








const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
       const address = server.address() as AddressInfo;
       console.log(`Server is running in http://localhost: ${address.port}`);
    } else {
       console.error(`Failure upon starting server.`);
    }
});