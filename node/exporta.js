console.log(module.exports)

console.log(module.exports === this)
console.log(module.exports === exports)

this.a = 1
exports.b = 2
module.exports.c = 3
exports = null


// OBJETO NÃO SERÁ RETORNADO APENAS COM EXPORTS
module.exports = {
    nome: 'Teste'
}

console.log(module.exports)

module.exports = { publico: true}
module.exports = { nome : "Samuel"}

console.log(module.exports)