Exercicio 1

a) Foreign key é uma forma de relacionar duas tabelas entre si.

b) Criação da tabela 

CREATE TABLE Rating (
id VARCHAR(255) PRIMARY KEY,
comment TEXT NOT NULL,
rate FLOAT NOT NULL,
movie_id VARCHAR(255),
FOREIGN KEY (movie_id) REFERENCES Movie(id)
)

Avaliação dos filmes

INSERT INTO Rating (id, comment, rate, movie_id)
VALUES (
"001",
"Filme fraco.",
3,
"001"
);

INSERT INTO Rating (id, comment, rate, movie_id)
VALUES (
"003",
"Clássico.",
7,
"003"
);

INSERT INTO Rating (id, comment, rate, movie_id)
VALUES (
"004",
"Obra prima.",
9,
"004"
);

c) "Error Code: 1452. Cannot add or update a child row: a foreign key constraint fails" - O erro ocorre pois devido ao uso de uma foreign key na query de Rating, o SQL não encontra um id equuivalente ao inserido na tabela "Movies".

d) ALTER TABLE Movies DROP COLUMN rate;

e) "Error Code: 1175. You are using safe update mode and you tried to update a table without a WHERE that uses a KEY column.  To disable safe mode, toggle the option in Preferences -> SQL Editor and reconnect." O SQL não permite deletar uma informação que esteja sendo usada em outra tabela relacionada, para isso ocorrer devemos apagar o dado na segunda tabela.
