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