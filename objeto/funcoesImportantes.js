const pessoa = {
    nome: 'Samuel',
    idade: 20,
    peso: 100
}

console.log(Object.keys(pessoa))
console.log(Object.values(pessoa))
console.log(Object.entries(pessoa))

// ----------------------------------------
Object.entries(pessoa).forEach(element => {
    console.log(`${element[0]} : ${element[1]}`)
});

// ---------------------------------------------
Object.defineProperty(pessoa, 'dataNascimento', {
    enumerable: true,
    writable: false,
    value: '01/02/2000'
})
console.log(pessoa.dataNascimento)

// ---------------------------------------------
// Object.assign (ES6)
const dest = {a: 1}
const o1   = {b: 2}
const o2   = {c:3, a:4}
const obj = Object.assign(dest, o1, o2) // Concatena o Objeto
console.log(obj)
