~~~~javascript

function criarArrayNomesAnimais() {
    const animais = [
     { nome: "Cachorro", classificacao: "mamífero" },
     { nome: "Papagaio", classificacao: "ave" },
     { nome: "Gato", classificacao: "mamífero" },
     { nome: "Carpa", classificacao: "peixe" },
     { nome: "Pomba", classificacao: "ave" }
   ]

 const nomeDosAnimais = animais.map((animais, index, array) =>{
    return animais.nome
 })
   return nomeDosAnimais
}

~~~~

