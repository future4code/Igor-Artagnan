Exercício 1

a) No RAW temos como resposta um objeto cada coluna como uma propriedade e seu respectivo dado baseado no parâmetro que foi passado na função getActorById.

b) const getActorByName = async (name: string): Promise<any> => {
        const result = await connection.raw(`
        SELECT * FROM Actor WHERE name= '${name}'
        `)
        return result[0][0]
    }

    getActorByName("Alessandra Negrini")
    .then(result =>{ console.log(result)})
    .catch(err => {console.log(err)})
 
 c) const getActorsByGender = async (gender: string): Promise<any> =>{
    const result = await connection.raw(`
    SELECT COUNT (*) as count FROM Actor WHERE gender = '${gender}'
    `)

    const count = result[0][0].count;
    return count;
}

getActorsByGender("female")
    .then(result =>{ console.log(result)})
    .catch(err => {console.log(err)})

---------------------------------------------------------------------------------------------------------------

Exercício 2

a) const updateActorInfo = async (id: string, salary: number): Promise<any> =>{
    const result = await connection("Actor")
    .update({salary: salary})
    .where("id", id)
}

updateActorInfo('002', 30000)
.then(result => {console.log(result);
})
.catch(err => {console.log(err);
})

b) const deleteActor = async (id: string): Promise<any> => {
    const result = await connection("Actor")
    .delete()
    .where("id", id)
}

deleteActor("004")
.then(result => {console.log(result);})
.catch(err => {console.log(err);})

c) const avgSalaryByGender = async (gender: string): Promise<any> => {
    const result = await connection("Actor")
    .avg("Salary as average")
    .where({gender})
    return result[0].average
}

avgSalaryByGender("female")
.then(result => {console.log(result);})
.catch(err => {console.log(err);})

---------------------------------------------------------------------------------------------------------------
Exercício 3

a) app.get("/actor/:id", async (req: Request, res: Response) => {
    try {
        const id = req.params.id
        const actor = await getActorById(id)
        res.status(200).send(actor)
    } catch (err) {
        res.status(400).send({message: err.message})
    }
})

b) app.get("/actor", async (req: Request, res: Response) => {
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

  -------------------------------------------------------------------------------------------------------------

  Exercício 4 