CREATE TABLE IF NOT EXISTS User(
      id VARCHAR(255) PRIMARY KEY,
      name VARCHAR(255) NOT NULL,
      email VARCHAR(255) NOT NULL,
      age INT NOT NULL
      );
      
      CREATE TABLE IF NOT EXISTS Product(
      id VARCHAR(255) PRIMARY KEY,
      name VARCHAR(255) NOT NULL,
      description VARCHAR(255) NOT NULL,
      price INT NOT NULL
      );
      
      CREATE TABLE IF NOT EXISTS Ticket(
      id VARCHAR(255) PRIMARY KEY,
      name VARCHAR(255) NOT NULL,
      description VARCHAR(255) NOT NULL,
      price INT NOT NULL,
      d_place VARCHAR(255) NOT NULL,
      to_place VARCHAR(255) NOT NULL
      );
      
      CREATE TABLE IF NOT EXISTS Purchase(
      id VARCHAR(255) PRIMARY KEY,
      items_quantity INT NOT NULL,
      total_price INT NOT NULL,
      product_id VARCHAR(255),
      user_id VARCHAR(255),
      FOREIGN KEY(user_id) REFERENCES User(id),
      FOREIGN KEY(product_id) REFERENCES Product(id)
      )