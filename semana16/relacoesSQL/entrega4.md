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

---------------------------------------------------------------------------------------------------------------

Exercício 2

a) Essa tabela cria uma relação entre outras duas tabelas existentes: Actor e Movies. A foreign key liga o id de um ator ao id de um filme.

b) 

INSERT INTO MovieCast (movie_id, actor_id)
VALUES (
"001",
"002"
);

INSERT INTO MovieCast (movie_id, actor_id)
VALUES (
"003",
"005"
);

INSERT INTO MovieCast (movie_id, actor_id)
VALUES (
"004",
"006"
);

INSERT INTO MovieCast (movie_id, actor_id)
VALUES (
"001",
"007"
);

INSERT INTO MovieCast (movie_id, actor_id)
VALUES (
"003",
"005"
);

INSERT INTO MovieCast (movie_id, actor_id)
VALUES (
"004",
"003"
);

c) "Error Code: 1452. Cannot add or update a child row: a foreign key constraint fails" - Retorna erro pois o id inserido não existe em outra tabela para ser lido pela foreign key.

d) "Error Code: 1175. You are using safe update mode and you tried to update a table without a WHERE that uses a KEY column.  To disable safe mode, toggle the option in Preferences -> SQL Editor and reconnect." - Para ser possível apagar esse dado nós devemos primeiro apagar a linha da segunda tabela onde ele também está sendo usado.

---------------------------------------------------------------------------------------------------------------

Exercício 3

a) A query "SELECT * FROM Movies INNER JOIN Rating ON Movies.id = Rating.movie_id;" mostra todas as informações dos filmes que tem seu ID também presente na tabela de Rating. O operador ON define os parâmetros que vão ser usados para buscar as informações que serão mostradas pela query.

b) SELECT m.id as movie_id, r.rate as rating FROM Movie m
INNER JOIN Rating r ON m.id = r.movie_id;

---------------------------------------------------------------------------------------------------------------

Exercício 4
