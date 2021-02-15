Array.prototype.reduce2 = function(callback, valorInicial){
    let acumulador = valorInicial || this[0]
    for (let i = 1; i < this.length; i++){
        acumulador = callback(acumulador, this[i], i, this)
    }
    return acumulador
}

const soma = (total, valor) => total + valor
const numeros = [1, 2, 3, 4, 5]
console.log(numeros.reduce2(soma, 4))