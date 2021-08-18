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
 
    const countActors = async (gender: string): Promise<any> => {
        const result = await connection.raw(`
          SELECT COUNT(*) as count FROM Actor WHERE gender = "${gender}"
        `);
        const count = result[0][0].count;
        return count;
      };

/* countActors("female")
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

app.get("/actor/:id", async (req: Request, res: Response) => {
    try {
        const id = req.params.id
        const actor = await getActorById(id)
        res.status(200).send(actor)
    } catch (err) {
        res.status(400).send({message: err.message})
    }
})

app.get("/actor", async (req: Request, res: Response) => {
    try {
      const count = await countActors(req.query.gender as string);
      res.status(200).send({
        quantity: count,
      });
    } catch (err) {
      res.status(400).send({
        message: err.message,
      });
    }
  });

app.put("/actor", async (req: Request, res: Response) =>{
    try {
        await updateActorInfo(req.body.id, req.body.salary)
        res.status(200).send({message: "Success!"})
    } catch (err) {
        res.status(400).send({message: err.message})
    }
})

app.delete("/actor/:id", async (req:Request, res: Response) => {
    try {
        await deleteActor(req.params.id)
    } catch(err) {
        res.status(400).send({
            message: err.message
        })
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