//EXERCÍCIOS DE INTERPRETAÇÃO DE CÓDIGO

//1

//a) 

//O console imprimirá  {nome: "Amanda Rangel", apelido "Mandi"}
//                     uma array com o index de cada uma e todas as informações dentro de usuário
//                        {nome: "Laís Petra", apelido "Laura"}
//uma array com o index de cada uma e todas as informações dentro de usuário
//                        {nome: "Letícia Chijo", apelido "Chijo"}
//uma array com o index de cada uma e todas as informações dentro de usuário

//2

//a) Será impresso ["Amanda Rangel", "Laís Petra", "Letícia Chijo"]

//3

//a) O console retornará uma array [ 0 {nome: "Amanda Rangel", apelido: "Mandi"}

//1 {nome: "Laís Petra", apelido: "Laura"} ]


//EXERCÍCIOS DE ESCRITA DE CÓDIGO

//1) 

const pets = [
    { nome: "Lupin", raca: "Salsicha" },
    { nome: "Polly", raca: "Lhasa Apso" },
    { nome: "Madame", raca: "Poodle" },
    { nome: "Quentinho", raca: "Salsicha" },
    { nome: "Fluffy", raca: "Poodle" },
    { nome: "Caramelo", raca: "Vira-lata" },
]
//a)
/*
 const nomeDosCachorros = pets.map((pets, index, array) =>{
            return pets.nome

 })

 console.log(nomeDosCachorros) */

//b)
/*
const cachorroSalsicha = pets.filter((pets)=>{
      return pets.raca === "Salsicha"
})
console.log(cachorroSalsicha) */

//c)

/*
const racaPoodle = pets.filter((pets, index, array)=>{
   return pets.raca === "Poodle"
}).map((pets, index, array)=>{
   return `Você ganhou um cupom de desconto de 10% para tosar o/a ${pets.nome}`

})
console.log(racaPoodle) */

//2)

const produtos = [
    { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
    { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
    { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
    { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
    { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
    { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
    { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
    { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
    { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
    { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.80 }
]

//a) 
/*
 const arrayNomeItens = produtos.map((produtos)=>{
     return produtos.nome


 })
 console.log(arrayNomeItens) */

//b)
/*
const itensComDesconto = produtos.map((produto, index, array) => {
    let desconto = produto.preco * 0.05
    produto.preco = produto.preco - desconto


    return {
        nome: produto.nome,
        preco: produto.preco //.toFixed(2) caso eu quisesse mostrar apenas duas casas após a vírgula
    };
})

console.log(itensComDesconto) */

//c)

/*
const bebidas = produtos.filter((produtos) =>{
      return produtos.categoria === "Bebidas"


})
console.log(bebidas) */

//d)
/*
const objetosYpe = produtos.filter((produto) => {

    return produto.nome.includes("Ypê")






})
console.log(objetosYpe) */

//e)

const novoArray = produtos.filter((produto) => {
    
    return produto.nome.includes("Ypê")

}).filter((produto) => {
    
    return produto.preco

}).map((produto) => {
   
    return `Compre ${produto.nome} por R$ ${produto.preco}`
})
console.log(novoArray)