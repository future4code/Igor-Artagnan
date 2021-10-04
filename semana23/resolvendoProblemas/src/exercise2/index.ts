//Implemente um método que performe uma compressão de string usando a contagem dos caracteres repetidos em sequência. Caso o resultado final tenha um tamanho maior do que a string inicial, seu programa deve retornar a string inicial

const verifyChar = (string: string): string => {

    const substrings = []
    let lastChar = string[0]
    let counter = 0

    for (const char of string) {
        if (char !== lastChar) {
            substrings.push(lastChar + counter)
            lastChar = char
            counter = 0
        }

        counter++
    }

    substrings.push(lastChar + counter)
    let result = ""

    for (const key of substrings) {
        result += key
    }

    return result.length > string.length ? string : result

}