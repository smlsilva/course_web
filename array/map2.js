Array.prototype.map2 = function(callback){
    let novoArray = [];
    for(let i = 0; i < this.length; i++){
        novoArray.push(callback(this[i], i, this))
    }
    return novoArray
}

const carro = [
    '{ "nome": "Borracha", "preco": 3.45 }',
    '{ "nome": "Caderno", "preco": 13.90}',
    '{ "nome": "Kit de Lapis", "preco": 41.22 }',
    '{ "nome": "Caneta", "preco": 7.50}'
]

// Retorna um Array com apenas os preços
// const paraObjeto = json => JSON.parse(json)
// const preco      = produto => produto.preco

const resultado = carro.map2(obj => JSON.parse(obj)).map(p => p.preco)
console.log(resultado)