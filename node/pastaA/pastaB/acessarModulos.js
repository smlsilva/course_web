const moduloA = require('../../moduloA')
console.log(moduloA.ola)

/*
const saudacao = require('saudacao')
console.log(saudacao.ola)
*/

const c = require('./pastaC/')
console.log(c.ola2)

const http = require('http')// modulo core do node
http.createServer((req, res) =>{
    res.write('bom dia')
    res.write('bom dia')
    res.end()
}).listen(8080)