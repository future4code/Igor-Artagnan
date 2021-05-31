~~~~javascript

function contaOcorrencias(arrayDeNumeros, numeroEscolhido) {
  let vezesNumero =0
  let mensagem = ""
  for (let num of arrayDeNumeros){
    if(num === numeroEscolhido){
      vezesNumero+=1
    }
  }
    if (vezesNumero === 0){
      return "Número não encontrado"
    } else
      return `O número ${numeroEscolhido} aparece ${vezesNumero}x`
} ~~~~ 