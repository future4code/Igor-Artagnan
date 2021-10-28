
const houseBurglar = (array) => {
    let result = 0

    for (let i = 0; i < array.length; i++) {
        if (i % 2 === 0) {

            result += array[i]
        }
    }
    return result
}

console.log(houseBurglar([2, 3, 6, 12, 3, 9, 11, 4]))

