Exercício 1

a) 

CREATE TABLE - Cria uma tabela.
VARCHAR(n) - Propriedade que limita a quantidade de caracteres (n)
PRIMARY KEY - Define um identificador, o qual deve ser um valor único (que não se repete).
NOT - Nega uma condição.
NULL - Define a falta de um valor que ainda é desconhecido.
DATE - Representa uma data.

b) 

O comando SHOW DATABASES informa o nome do schema em que você está trabalhando e o nome do seu database. Já o SHOW TABLE mostra todas as tabelas criadas em seu database.

c)

O comando DESCRIBE nomeDaTabela detalha a construção de uma tabela, mostrando os nomes das colunas, tipos e qual é a chave primária.

QUERRYS

CREATE TABLE Actor (
id VARCHAR(255) PRIMARY KEY,
name VARCHAR(255) NOT NULL,
salary FLOAT NOT NULL,
birth_date DATE NOT NULL,
gender VARCHAR(6) NOT NULL
);

SHOW DATABASES;

SHOW TABLES;

DESCRIBE Actor

------------------------------------------------------------------------------------------------------------------------------------------------

Exercício 2

a)

INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
"002",
"Glória Pires",
1200000,
"1963-08-23",
"female"
);

b)

"Error Code: 1062. Duplicate entry '002' for key 'PRIMARY'". O erro aconteceu pela chave primária ter sido duplicada, o que não pode ocorrer pois é essencial que a primary key seja um valor que não se repete.

c)

"Error Code: 1136. Column count doesn't match value count at row 1" A quantidade de colunas não correspondem com as informações que foram inseridas.
Querry corrigida:

INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "003", 
  "Fernanda Montenegro",
  300000,
  "1929-10-19", 
  "female"
);

d)

"Error Code: 1364. Field 'name' doesn't have a default value" Faltou a nomeação e o preenchimento do campo de nome.
Querry corrigida:

INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "004",
  "John Doe",
  400000,
  "1949-04-18", 
  "male"
);

e)

"Error Code: 1292. Incorrect date value: '1950' for column 'birth_date' at row 1" A querry espera receber uma data em formato de string.
Querry corrigida:

INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "005", 
  "Juliana Paes",
  719333.33,
  "1979-03-26", 
  "female"
);

f)

INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
"006",
"Robert Anthony De Niro Jr",
654134789,
"1943-08-17",
"male"
);

INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
"007",
"Jodie Foster",
4564785,
"1962-11-19",
"female"
);

------------------------------------------------------------------------------------------------------------------------------------------------

Exercício 3

a)

SELECT id, name, salary, birth_date from Actor WHERE gender = "female";

b)

SELECT salary from Actor WHERE name = "Tony Ramos";

c)

SELECT id, name, salary, birth_date from Actor WHERE gender = "invalid";
O MySQL não retorna nenhum resultado, pois o campo de gênero é obrigatória, não havendo assim nenhum registro que não tenha esse dado.

d)

SELECT id, name, salary from Actor WHERE salary <= '500000'

e)

"Error Code: 1054. Unknown column 'nome' in 'field list'" Esse erro ocorreu pois não existe uma coluna nomeada como "nome".
Querry corrigida:

SELECT id, name from Actor WHERE id = "002".

"14:45:33	SELECT id, name from Actor WHERE id = "002" LIMIT 0, 1000	1 row(s) returned	0.156 sec / 0.000 sec"

------------------------------------------------------------------------------------------------------------------------------------------------

Exercício 4

a)

"SELECT * FROM Actor
WHERE (name LIKE "A%" OR name LIKE "J%") AND salary > 300000"

A querry acima faz uma pesquisa na tabela "Actor" e retorna todos os nomes que começam com A ou (OR) J e (AND) no qual o salário seja maior que 300000.

b)

SELECT * FROM Actor
WHERE name NOT LIKE "A%"  AND salary > 300000;

c)

SELECT * FROM Actor
WHERE name LIKE "%g%";

d)

SELECT * FROM Actor
WHERE (name LIKE "%a%" OR "%g%") AND salary BETWEEN 350000 AND 900000;

------------------------------------------------------------------------------------------------------------------------------------------------

Exercício 5

a)

CREATE TABLE Movies (
id VARCHAR(255) PRIMARY KEY,
name VARCHAR(255) NOT NULL,
sinopse TEXT NOT NULL,
release_date DATE NOT NULL,
rate FLOAT NOT NULL
);

Criei uma tabela onde o ID é a primary key, defini todos os valores como obrigatórios e o valor de sinopse como texto, pois ele permite uma quantidade maior de carcteres que o VARCHAR.

b)

INSERT INTO Movies (id, name, sinopse, release_date, rate)
VALUES(
"001",
"Se Eu Fosse Você",
"Cláudio e Helena são casados há muitos anos e enfrentam a rotina do casamento. Um dia eles são atingidos por um fenômeno inexplicável e trocam de corpos",
"2006-01-06",
7
);

c)

INSERT INTO Movies (id, name, sinopse, release_date, rate)
VALUES(
"002",
"Doce de mãe",
"Dona Picucha, uma animada senhora de 85 anos, sempre causa grandes confusões. A vida dela e dos seus quatro filhos sofre uma reviravolta depois que Zaida, empregada e amiga de Dona Picucha, anuncia que vai se casar e não poderá mais morar com ela",
"2012-12-27",
10
);

d)

INSERT INTO Movies (id, name, sinopse, release_date, rate)
VALUES(
"003",
"Dona Flor e Seus Dois Maridos",
"Dona Flor é uma sedutora professora de culinária casada com Vadinho, que só quer saber de farras e jogatina nas boates. A vida de abusos acaba por acarretar sua morte precoce.",
"2017-11-02",
8
);

e)

INSERT INTO Movies (id, name, sinopse, release_date, rate)
VALUES(
"004",
"Aquarius",
"Uma jornalista aposentada defende seu apartamento, onde viveu a vida toda, do assédio de uma construtora. O plano é demolir o edifício Aquarius e dar lugar a um grande empreendimento.",
"2016-09-01",
9
);

------------------------------------------------------------------------------------------------------------------------------------------------

Exercício 6

a)

SELECT id, name, rate from Movies WHERE id = "004";

b)

SELECT id, name, sinopse, release_date, rate from Movies WHERE name = "Aquarius";

c)

SELECT * FROM Movies
WHERE rate > 7;

------------------------------------------------------------------------------------------------------------------------------------------------

Exercício 7

a)

SELECT * FROM Movies
WHERE name LIKE "%vida%";

b)

SELECT * FROM Movies
WHERE name OR sinopse LIKE "%vida%";

c)

SELECT * FROM Movies
WHERE release_date > 2021-08-16;

d)

SELECT * FROM Movies
WHERE release_date > 2021-08-16 AND
(name LIKE "%vida%" OR sinopse LIKE "%vida%") AND
 rate > 7;

------------------------------------------------------------------------------------------------------------------------------------------------

                                                    TODAS AS QUERYS UTILIZADAS NO EXERCÍCIO

CREATE TABLE Actor (
id VARCHAR(255) PRIMARY KEY,
name VARCHAR(255) NOT NULL,
salary FLOAT NOT NULL,
birth_date DATE NOT NULL,
gender VARCHAR(6) NOT NULL
);

SHOW DATABASES;

SHOW TABLES;

DESCRIBE Actor;

INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
"001",
"Tony Ramos",
400000,
"1948-08-25",
"male"
);

INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
"002",
"Glória Pires",
1200000,
"1963-08-23",
"female"
);

INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
"002",
"Anthony Hopkins",
1200000,
"1963-08-23",
"male"
);

INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "003", 
  "Fernanda Montenegro",
  300000,
  "1929-10-19", 
  "female"
);

INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "004",
  "John Doe",
  400000,
  "1949-04-18", 
  "male"
);

INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "005", 
  "Juliana Paes",
  719333.33,
  "1979-03-26", 
  "female"
);

INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
"006",
"Robert Anthony De Niro Jr",
654134789,
"1943-08-17",
"male"
);

INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
"007",
"Jodie Foster",
4564785,
"1962-11-19",
"female"
);

SELECT * FROM Actor;

SELECT id, salary from Actor;

SELECT id, name from Actor WHERE gender = "male";

SELECT * FROM Actor;

SELECT id, name, salary, birth_date from Actor WHERE gender = "female";

SELECT salary from Actor WHERE name = "Tony Ramos";

SELECT id, name, salary, birth_date from Actor WHERE gender = "invalid";

SELECT id, name, salary from Actor WHERE salary <= '500000';

SELECT id, name from Actor WHERE id = "002";

SELECT * FROM Actor
WHERE (name LIKE "A%" OR name LIKE "J%") AND salary > 300000;

SELECT * FROM Actor
WHERE name NOT LIKE "A%"  AND salary > 300000;

SELECT * FROM Actor
WHERE name LIKE "%g%";

SELECT * FROM Actor
WHERE (name LIKE "%a%" OR "%g%") AND salary BETWEEN 350000 AND 900000;

CREATE TABLE Movies (
id VARCHAR(255) PRIMARY KEY,
name VARCHAR(255) NOT NULL,
sinopse TEXT NOT NULL,
release_date DATE NOT NULL,
rate FLOAT NOT NULL
);

INSERT INTO Movies (id, name, sinopse, release_date, rate)
VALUES(
"001",
"Se Eu Fosse Você",
"Cláudio e Helena são casados há muitos anos e enfrentam a rotina do casamento. Um dia eles são atingidos por um fenômeno inexplicável e trocam de corpos",
"2006-01-06",
7
);

DESCRIBE Movies;

SELECT * FROM Movies;

INSERT INTO Movies (id, name, sinopse, release_date, rate)
VALUES(
"002",
"Doce de mãe",
"Dona Picucha, uma animada senhora de 85 anos, sempre causa grandes confusões. A vida dela e dos seus quatro filhos sofre uma reviravolta depois que Zaida, empregada e amiga de Dona Picucha, anuncia que vai se casar e não poderá mais morar com ela",
"2012-12-27",
10
);

INSERT INTO Movies (id, name, sinopse, release_date, rate)
VALUES(
"003",
"Dona Flor e Seus Dois Maridos",
"Dona Flor é uma sedutora professora de culinária casada com Vadinho, que só quer saber de farras e jogatina nas boates. A vida de abusos acaba por acarretar sua morte precoce.",
"2017-11-02",
8
);

INSERT INTO Movies (id, name, sinopse, release_date, rate)
VALUES(
"004",
"Aquarius",
"Uma jornalista aposentada defende seu apartamento, onde viveu a vida toda, do assédio de uma construtora. O plano é demolir o edifício Aquarius e dar lugar a um grande empreendimento.",
"2016-09-01",
9
);

SELECT * FROM Movies;

SELECT id, name, rate from Movies WHERE id = "004";

SELECT id, name, sinopse, release_date, rate from Movies WHERE name = "Aquarius";

SELECT * FROM Movies
WHERE rate > 7;

SELECT * FROM Movies
WHERE name LIKE "%vida%";

SELECT * FROM Movies
WHERE name OR sinopse LIKE "%vida%";

SELECT * FROM Movies
WHERE release_date > 2021-08-16;

SELECT * FROM Movies
WHERE release_date > 2021-08-16 AND
(name LIKE "%vida%" OR sinopse LIKE "%vida%") AND
 rate > 7;











