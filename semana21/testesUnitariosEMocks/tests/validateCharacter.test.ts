//*a. Crie um teste que verifique o comportamento da função com um personagem com o nome vazio, isto é, `""`.*

import { validateCharacter } from ".."

describe("Testando o validateCharacter", () => {
    test("Should return false for empty name", () => {
        const result = validateCharacter({
            name: "",
            life: 2000,
            strength: 500,
            defense: 700
        })

        expect(result).toBe(false)
    })

    //b. Crie um teste que verifique o comportamento da função com um personagem com a vida igual a zero. 

    test("Should return false for life equal 0", () => {
        const result = validateCharacter({
            name: "Jello Biafra",
            life: 0,
            strength: 500,
            defense: 700
        })

        expect(result).toBe(false)
    })

    //c. Crie um teste que verifique o comportamento da função com um personagem com a força igual a zero. 

    test("Should return false for strength equal 0", () => {
        const result = validateCharacter({
            name: "Jello Biafra",
            life: 2000,
            strength: 0,
            defense: 700
        })

        expect(result).toBe(false)
    })

    //d. Crie um teste que verifique o comportamento da função com um personagem com a defesa igual a zero.

    test("Should return false for defense equal 0", () => {
        const result = validateCharacter({
            name: "Jello Biafra",
            life: 2000,
            strength: 500,
            defense: 0
        })

        expect(result).toBe(false)
    })

    //e. Crie um teste que verifique o comportamento da função com um personagem com a vida ou a força ou a defesa com um valor negativo

    test("Should return false for properties with negative values", () => {
        const result = validateCharacter({
            name: "Jello Biafra",
            life: -2000,
            strength: -500,
            defense: -700
        })

        expect(result).toBe(false)

    })

    //f. Crie um teste que verifique o comportamento da função com um personagem com as informações validas

    test("Should return true for valid properties", () => {
        const result = validateCharacter({
            name: "Jello Biafra",
            life: 2000,
            strength: 500,
            defense: 700
        })

        expect(result).toBe(true)

    })



})