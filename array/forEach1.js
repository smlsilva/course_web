const aprovados = ['Agatha', 'Aldo', 'Samuel']

aprovados.forEach(function(nome, indice){
    console.log(`${indice + 1} - ${nome}`)
})

aprovados.forEach((nome) => {console.log(nome)})

const exibirAprovado = aprovados => console.log(aprovados)
aprovados.forEach(exibirAprovado)