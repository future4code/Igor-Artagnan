import app from "./app"

class User {
    private id: string;
    private email: string;
    private name: string;
    private password: string;
    public introduceYourself(): string {
        return `Olá eu sou o ${this.name}. Bom dia!`
     }
  
    constructor(
          id: string,
          email: string,
          name: string,
          password: string,
       
      ){
          console.log("Chamando o construtor da classe User")
          this.id = id
          this.email = email
          this.name = name 
          this.password = password
          
      }
  
      public getId(): string {
          return this.id
      }
  
      public getEmail(): string {
          return this.email
      }
  
      public getName(): string {
          return this.name
      }

      public getPassword(): string {
        return this.password
    }
  }

  /* const newUser = new User("1", "zejose@ze.com", "Zé José", "123456789") */

  /* console.log(newUser.getPassword()) */

  class Customer extends User {
    public purchaseTotal: number = 0;
    private creditCard: string;
  
    constructor(
      id: string,
      email: string,
      name: string,
      password: string,
      creditCard: string
    ) {
      super(id, email, name, password);
      console.log("Chamando o construtor da classe Customer");
      this.creditCard = creditCard;
    }
  
    public getCreditCard(): string {
      return this.creditCard;
    }
  }

  const newCustomer = new Customer("1", "bertoroberto@berto.com", "Berto Roberto", "456812", "Nubank visa")
  /* console.log(newCustomer) */

  //Exercício 3

 /* console.log('ID:', newCustomer.getId())
  console.log('Email:', newCustomer.getEmail())
  console.log('Nome:', newCustomer.getName())
  console.log('Senha:', newCustomer.getPassword())
  console.log('Email:', newCustomer.getEmail())
  console.log('Cartão de crédito:', newCustomer.getCreditCard())
  console.log('Total de compra:', newCustomer.purchaseTotal) */
  
  //Exercício 4

  /* console.log(newCustomer.introduceYourself()) */

 //Polimorfismo
 
 //Exercício 1

 export interface Client {
    name: string;
    registrationNumber: number;
    consumedEnergy: number;
    calculateBill(): number;
    
  }

  const client: Client = {
    name: "Teste Cliente",
    registrationNumber: 1,
    consumedEnergy: 100,
  
    calculateBill: () => {
      return 2;
    }
  }

  /* console.log('Nome', client.name);
  console.log('Número de registro', client.registrationNumber);
  console.log('Energia consumida', client.consumedEnergy);
  console.log('Cálculo da conta', client.calculateBill()); */
  
  export abstract class Place {
    constructor(protected cep: string) {}
  
      public getCep(): string {
          return this.cep;
    }
  }

 /* const newPlace = new Place() */

 /* export class Residence extends Place {
    constructor(
      protected residentsQuantity: number,
      // Refere-se ao número de moradores da casa
      cep: string
    ) {
      super(cep);
    }
  }
  
  export class Commerce extends Place {
    constructor(
      protected floorsQuantity: number,
      // Refere-se à quantidade de andares do lugar
      cep: string
    ) {
      super(cep);
    }
  }

  export class Industry extends Place {
    constructor(
      protected machinesQuantity: number, 
      // Refere-se à quantidade de máquinas do local      
      cep: string
          ) {
          super(cep);
    }
  } */
  
  /* const newResidence = new Residence(2, '14256')
  console.log('CEP residência:', newResidence.getCep());

  const newCommerce = new Commerce(5, "789789")
  console.log('CEP comércio:', newCommerce.getCep());

  const newIndustry = new Industry(45, '55566-8')
  console.log('CEP indústria', newIndustry.getCep()); */

  export class Residence extends Place {
    constructor(
      private dwellersQuantity: number,
  
      cep: string
    ) {
      super(cep);
    }
    
    public getDwellersQuantity(): number {
      return this.dwellersQuantity
    }
  }

  export class Commerce extends Place {
    constructor(
      private floorsQuantity: number,
      // Refere-se à quantidade de andares do lugar
  
      cep: string
    ) {
      super(cep);
    }
  
    public getFloorsQuantity(): number {
      return this.floorsQuantity;
    }
  }

  export class Industry extends Place {
    constructor(
      private machinesQuantity: number,
      // Refere-se à quantidade de máquinas do local
  
      cep: string
    ) {
      super(cep);
    }
  
    public getMachinesQuantity(): number {
      return this.machinesQuantity;
    }
  }
  
  
  

  


