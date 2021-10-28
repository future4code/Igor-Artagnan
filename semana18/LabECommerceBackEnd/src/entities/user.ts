
export class User {
    name: string
    email: string
    age: number
    id: string

    constructor(
        userName: string,
        userEmail: string,
        userAge: number,
        userId: string
    ) {
        this.name = userName
        this.email = userEmail
        this.age = userAge
        this.id = userId

    }

}