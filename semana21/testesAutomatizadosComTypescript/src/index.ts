import { Account } from "./types";

export const  performPurchase = (account: Account, value: number): Account | undefined => {

    if (account.balance >= value){
        return {
            ...account,
            balance: account.balance - value
        }        
    }

    return undefined

}


console.log(performPurchase({name: 'Igor', balance: 500}, 700))