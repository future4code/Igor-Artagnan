//Considere que a gente só possa fazer três operações com string: adicionar um caractere ao final dele, remover um caractere do final dele ou substituir um caractere por outro. Dizemos que uma string é 'one edit' de outra se ela for o resultado da original a partir de UMA SÓ dessas operações. Escreva um método que determine se uma string é 'one edit' de outra.

// CONSIDERAÇÕES -
// A diferença de tamanho entre as strings não pode ser maior que 1.
// A quantidade de caracteres diferente entre as strings não pode ser mais que 1.




const verifyString = (stringA: string, stringB: string): boolean => {

    if (stringA.length - stringB.length > 1) { // -A diferença de tamanho entre as strings é maior que 1?

        return false

    } else if (stringA.length > stringB.length) {

        return stringA.includes(stringB)
        // -Contém a string menor dentro da maior?
    } else if (stringB.length > stringA.length) {

        return stringB.includes(stringA)

    }

    let counter = 0

    for (let i = 0; i < stringA.length; i++) {  // Percorre a string para contabilizar quantos caracteres diferentes existem.
        if (stringA[i] !== stringB[i])
            counter++
    }

    return counter === 1

}

//TESTES

console.log(verifyString("banan", "banana")) //TRUE
console.log(verifyString("bananak", "banana")) //TRUE
console.log(verifyString("panana", "banana")) //TRUE
console.log(verifyString("bananaaa", 'banana')) //FALSE
