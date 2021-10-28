import { performPurchase } from "../src"
import { Account } from "../src/types"

//a)

test("Testing balance greater than value", () => {
    const account: Account = {
        name: "John Doe",
        balance: 100
    }

    const result = performPurchase(account, 40)

    expect(result).toEqual({
        name: "John Doe",
        balance: 60
    })
})

//b)

test("Testing balance equal than value", () => {
    const account: Account = {
        name: "John Doe",
        balance: 150
    }

    const result = performPurchase(account, 150)

    expect(result).toEqual({
        ...account,
        balance: 0
    })
})

//c)


test("Testing balance less than value", () => {
    const account: Account = {
        name: "John Doe",
        balance: 150
    }

    const result = performPurchase(account, 200)

    expect(result).not.toBeDefined()

})

