~~~~JavaScript
function calculaSalario(carrosVendidos, valorVendas) {
    let porcentagemVenda = valorVendas * 0.05
    carrosVendidos *= 100 
    let salario = 2000 + carrosVendidos + porcentagemVenda
    
    return console.log(salario)
}
   calculaSalario(10, 1000) 
   ~~~~