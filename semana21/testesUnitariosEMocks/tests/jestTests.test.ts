import { performAttack } from "..";
import { Character } from "../types";

describe("Testando mocks", ()=> {
    
    test("Creating Mocks", () => {
        const validator = jest.fn(() => {
                return true
            });
    });

    test("Creating Mocks", () => {
        const validator = jest.fn(() => {
                return false
            });
    });

})

test("Should perform attack", () => {
    const validator = jest.fn(()=>{
        return true
    })

    const attacker: Character ={
        name: "Jello Biafra",
        life: 1500,
        defense: 200,
        strength: 600
    }

    const defender: Character = {
        name: "Joey Ramone",
        life: 1500,
        defense: 150,
        strength: 650
    }

    performAttack(attacker, defender, validator as any)

    expect(defender.life).toEqual(1300)
    expect(validator).toHaveBeenCalled()
    expect(validator).toHaveBeenCalledTimes(2)
    expect(validator).toHaveReturnedTimes(2)
})

test("Should return invalid character error", () => {
    expect.assertions(4);
    const validator = jest.fn(() => {
      return false;
    });

    const attacker: Character = {
      name: "",
      life: 1500,
      defense: 200,
      strength: 600,
    };

    const defender: Character = {
      name: "Jello Biafra",
      life: 1500,
      defense: 400,
      strength: 800,
    };

    try {
      performAttack(attacker, defender, validator as any);
    } catch (err) {
      expect(err.message).toBe("Invalid character");
      expect(validator).toHaveBeenCalled();
      expect(validator).toHaveBeenCalledTimes(1);
      expect(validator).toHaveReturnedTimes(1);
    }
  });