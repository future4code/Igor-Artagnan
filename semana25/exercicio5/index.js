//### Exercício de lógica - **Contar números negativos em matriz ordenada**

//Escreva uma função que recebe uma matriz (um array de arrays) que está ordenada em ordem **decrescente** tanto na linha quanto na coluna, e retorna quantos **números negativos** tem nessa matriz.

const returnNegative = (input) => {
    let negativeCounter = 0;
    for (let i = 0; i < input.length; i++) {

        for (let j = 0; j < input[i].length; j++) {

            if (input[i][j] < 0) {

                negativeCounter += 1
            }
        }
    }

    return negativeCounter
}


console.log(returnNegative([[4, 3, 2, -1], [3, 2, 1, -1], [1, 1, -1, -2], [-1, -1, -2, -3]]));
console.log(returnNegative([[3, 2], [1, 0]]));
console.log(returnNegative([[1, -1], [-1, -1]]));
console.log(returnNegative([[-1]]));




