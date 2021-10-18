//Escreva uma função que recebe um array não vazio de números. Todos os números do array aparecem 2 vezes, com excessão de um. Encontre (e retorne) esse número.


let retornaRepetido = (arrayOriginal) => {
    
    for (let i = 0; i < arrayOriginal.length - 1; i++) {        // O loop percorre todos os elementos da array

        for (let j = i + 1; j < arrayOriginal.length; j++) {  // O loop roda uma vez para cada elemento

            if (arrayOriginal[i] == arrayOriginal[j]) {      // O if compara cada elemento da array com todos os outros, 
                                                            //  retornando o que tiver sua aparição repetida.
                 console.log(arrayOriginal[i])
            }
        }

    }

}

console.log(retornaRepetido([4,1,2,1,2])) 


