var express = require('express')
var http = require('http')
app = express()

app.get('/', function(req, res){
 res.end('<title> Bem Vindo')
})
app.listen(3000);
console.log('Servidor iniciado em localhost:3000. Ctrl+C para encerrar…')
