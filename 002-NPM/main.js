const express = require('express')
const crud_cervejas = require('./cervejas');

const app = express();

// Rota raiz '/'
app.get('/', function(req, res){
    res.send('<h1>Curso JsAvançado</h1>');
});
// Rota cerveja - get
app.get('/cerveja', function(req, res){
    res.send(crud_cervejas.read());
});

app.post('/cerveja', function(req, res){
    res.send('Cadastrado com sucesso!');
});

app.put('/cerveja', function(req, res){
    res.send('Alterado com sucesso!');
});

app.delete('/cerveja', function(req, res){
    res.send('Deletado com sucesso!');
});


app.listen(3001);