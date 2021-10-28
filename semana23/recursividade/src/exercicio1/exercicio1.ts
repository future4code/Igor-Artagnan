//Exercício 1

//Escreva uma função recursiva que:

//a. Receba um número e imprima todos os inteiros de 0 até esse número no console em ordem crescente

const printNumbersCresc = (number: number) => {
  if (number >= 0) {
    printNumbersCresc(number - 1);
    console.log(number);
  }
};

//b. Receba um número e imprima todos os inteiros desse número até 0 em ordem decrescente

const printNumbersDec = (number: number) => {
  if (number >= 0) {
    console.log(number);
    printNumbersDec(number - 1);
  }
};