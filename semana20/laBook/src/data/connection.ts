import Knex from "knex"

export const connection = Knex({
    client: 'mysql',
    connection: {
       host: process.env.DB_HOST,
       user: process.env.DB_USER,
       password: process.env.DB_PASS,
       database: process.env.DB_SCHEMA,
       port: 3306
    }
 })

