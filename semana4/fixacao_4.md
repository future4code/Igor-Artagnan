~~~~javascript

function contaOcorrencias(arrayDeNumeros, numeroEscolhido) {

    let vezesNumero = 0
    let mensagem = ''

    for (let num of arrayDeNumeros){
        if (num === numeroEscolhido){

            vezesNumero += 1

           mensagem = `O número ${numeroEscolhido} aparece ${vezesNumero}x`
            
        }else if(numeroEscolhido !== 4){

            mensagem = `Número não encontrado`

        }
    
        
    
    }
   
    return console.log(mensagem)
}
contaOcorrencias( [1, 4, 8, 2, 5, 4, 10, 1, 2, 4, 7, 5], 4) ~~~~ 