import app from "./app"

class User {
    private id: string;
    private email: string;
    private name: string;
    private password: string;
  
    constructor(
          id: string,
          email: string,
          name: string,
          password: string
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

  console.log('ID:', newCustomer.getId())
  console.log('Email:', newCustomer.getEmail())
  console.log('Nome:', newCustomer.getName())
  console.log('Senha:', newCustomer.getPassword())
  console.log('Email:', newCustomer.getEmail())
  console.log('Cartão de crédito:', newCustomer.getCreditCard())



  


