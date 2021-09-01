import { connection } from "./connection"


const printError = (error: any) => { console.log(error.sqlMessage || error.message) }

const createTables = () => connection
   .raw(`
      
      CREATE TABLE IF NOT EXISTS User(
      id VARCHAR(255) PRIMARY KEY,
      nome VARCHAR(255) NOT NULL,
      email VARCHAR(255) NOT NULL,
      idade INT NOT NULL
      );
      
      CREATE TABLE IF NOT EXISTS Product(
      id VARCHAR(255) PRIMARY KEY,
      nome VARCHAR(255) NOT NULL,
      descricao VARCHAR(255) NOT NULL,
      preco INT NOT NULL
      );
      
      CREATE TABLE IF NOT EXISTS Ticket(
      id VARCHAR(255) PRIMARY KEY,
      nome VARCHAR(255) NOT NULL,
      descricao VARCHAR(255) NOT NULL,
      preco INT NOT NULL,
      origem VARCHAR(255) NOT NULL,
      destino VARCHAR(255) NOT NULL
      );
      
      CREATE TABLE IF NOT EXISTS Purchase(
      id VARCHAR(255) PRIMARY KEY,
      quantidade_itens INT NOT NULL,
      valor_total INT NOT NULL,
      product_id VARCHAR(255),
      user_id VARCHAR(255),
      FOREIGN KEY(user_id) REFERENCES User(id),
      FOREIGN KEY(product_id) REFERENCES Product(id)
      )
      
   `)
   .then(() => { console.log("Tabelas criadas") })
   .catch(printError)



const closeConnection = () => { connection.destroy() }

createTables()
   
   .finally(closeConnection)