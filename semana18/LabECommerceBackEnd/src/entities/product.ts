export class Product {
    name: string
    description: string
    price: number
    id: string

    constructor(
        productName: string,
        productDescription: string,
        productPrice: number,
        productId: string
    ) {
        this.name = productName
        this.description = productDescription
        this.price = productPrice
        this.id = productId

    }

}