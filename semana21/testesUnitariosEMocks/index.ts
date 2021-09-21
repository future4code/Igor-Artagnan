import { Character } from "./types";

//Validação de um personagem baseada nas regras de negócio.

export const validateCharacter = (input: Character): boolean => {

    if (!input.name ||
        input.life === undefined ||
        input.strength === undefined ||
        input.defense === undefined
    ) {
        return false
    }

    if (input.life <= 0 || input.defense <= 0 || input.strength <= 0) {
        return false
    }

    return true
}