//O objetivo desse challenge é te fazer pensar como um método que a gente usa bastante com strings: `.indexOf`. Escreva uma função que simule o seu comportamento (sem utilizar esse método na sua implementação), que receba uma string `source` e um caracter que se deseja encontrar nela `query` e devolva o index em que esse caracter aparece pela primeira vez

const indexOfItem = (source, string, mainIndex = 0, sourceIndex = 0, stringIndex = 0) => {

    if (sourceIndex > source.length) {
        return -1
    }

    if (stringIndex >= string.length) {
        return mainIndex
    }

    if (source[sourceIndex] === string[stringIndex]) {
        return indexOfItem(source, string, mainIndex, sourceIndex + 1, stringIndex + 1);
    } else {
        return indexOfItem(source, string, mainIndex + 1, mainIndex + 1, 0);
    }

}

console.log(indexOfItem('b', 'cabana'));

