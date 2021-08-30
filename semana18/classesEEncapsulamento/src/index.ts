/* import { Transaction } from "knex" */

/* 

Exercício 1

a) O constructor é um método usado para criar e inicializar um objeto criado a partir de uma classe. Para chama-lo usamos a keyword New.

*/


// b) A mensagem "Chamando o construtor da classe User" foi impressa no terminal apenas uma vez.

class UserAccount {

    private cpf: string;
    private name: string;
    private age: number;
    private balance: number = 0;
    private transactions: Transaction[] = [];

    constructor(
        userCpf: string,
        userName: string,
        userAge: number,
    ) {
        console.log("Chamando o construtor da classe UserAccount")
        this.cpf = userCpf;
        this.name = userName;
        this.age = userAge;
    };


    getCpf() {
        return this.cpf;
    };

    getName() {
        return this.name;
    };

    getAge() {
        return this.age;
    };

    getBalance() {
        return this.balance;
    };

    getTransactions() {
        return this.transactions;
    };

}

const cpf = "158946788-01"
const nome = "Zé José"
const idade = 24

const zeJose = new UserAccount(cpf, nome, idade)

//c) 

console.log(zeJose.getCpf())

//Exercício 2

class Transaction {
    private description: string
    private value: number
    private date: string

    constructor(
        inputDescrition: string,
        inputValue: number,
        inputDate: string

    ) {
        this.description = inputDescrition;
        this.value = inputValue;
        this.date = inputDate
    };

    getDescription(){
        return this.description
    };

    getValue(){
        return this.value
    };

    getDate(){
        return this.date
    };

}
  

const newTransaction = new Transaction("lorem ipsun", 3000, "30/08/2021")

console.log(newTransaction)








