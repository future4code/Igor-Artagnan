EXERCÍCIO 1

a- O uso de string para representar id's permite uma maior possibilidade de criar id's únicos, pois conseguimos realizar a combinação entre números, letras (maiúsculas e minúsculas ) e caracteres especiais, diferente de que se usássemos number.
----------------------------------------------------------------------------------------------------------------

b- Feito.
----------------------------------------------------------------------------------------------------------------

EXERCÍCIO 2

a- O código acima realiza duas funções:
----------------------------------------------------------------------------------------------------------------

A constante connection faz a conexão com um banco de dados do mysql, usando as informações de acesso que se encontram no arquivo .env.

A função assíncrona createUser insere dados tipados na tabela "User" que se encontra no banco de dados.
----------------------------------------------------------------------------------------------------------------

b-  CREATE TABLE IF NOT EXISTS User_55 (
   id VARCHAR(255) PRIMARY KEY,
   email VARCHAR(255) UNIQUE NOT NULL,
   password VARCHAR(255) NOT NULL
);
----------------------------------------------------------------------------------------------------------------

c- Feito.
----------------------------------------------------------------------------------------------------------------

EXERCÍCIO 3

