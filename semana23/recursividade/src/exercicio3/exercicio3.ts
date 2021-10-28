//Exercício 3

//Transforme a função desenvolvida no Exercício 2 em **iterativa** (ou seja, não use recursividade).

export const calculateSumTo = (n: number): number => {
    let counter = 0
      for (let i = 0 ; i <= n ; i++) {
          counter += i;
    }
      return counter;
  };