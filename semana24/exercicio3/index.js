const checaString = (input) => {

    const arrayOfStrings = []

    for (let char of input) {
        if (input === '(' || input === '[' || input === '{') {
            arrayOfStrings.push(char)
        } else {
            const lastChar = arrayOfStrings.pop()

            if (!lastChar) {
                false
            } else if (
                (lastChar === '(' && char !== ")") ||
                (lastChar === '[' && char !== ']') ||
                (lastChar === '{' && char != '}')

            ) {
                return false
            }
        }
    }

    if (arrayOfStrings.length > 0) {
        return false
    }

    return true
}