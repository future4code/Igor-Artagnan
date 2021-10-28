                                        Herança

Exercício 1

a. Seria possível imprimir a senha (password) atrelada a essa instância?
R: Sim, usando o método getPassword.

b. Quantas vezes a mensagem "Chamando o construtor da classe User" foi impressa no terminal?
R: Apenas uma vez.

Exercício 2

a. Quantas vezes a mensagem "Chamando o construtor da classe Customer" foi impressa no terminal? 
R: Apenas uma vez.

b. Quantas vezes a mensagem "Chamando o construtor da classe User" foi impressa no terminal? Por quê?
R: O construtor da classe User aparece uma vez pois o User é uma subclasse do Customer.

Exercício 3

a. Seria possível imprimir a senha (password) atrelada a essa instância? Por quê?
R: Sim, da mesma forma em que imprimimos o password do Customer, usando o método get que foi herdado dele.

                                        Polimorfismo

Exercício 1

a. Quais propriedades você conseguiu imprimir? Teve alguma que não foi possível? Por que isso aconteceu?
R: Foi possível imprimir todas as propriedades pois elas são nativamente públicas.

a. Mesmo sabendo que não é possível, tente criar uma instância dessa classe (ou seja: new Place(...)). Qual foi o erro que o Typescript gerou?
R: A mensagem de erro do ts foi "Cannot create an instance of an abstract class."

b. Pense e responda: o que precisaríamos fazer para conseguir efetivamente criar uma instância dessa classe?
R: Teriamos que transformar a classe de abstrata para interface. // Correção: "para criar uma instância de uma classe abstrata precisamos declarar uma classe filha e criar uma instância dessa última."