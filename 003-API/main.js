const express = require('express');
const cervejas = require('./cervejas');
const cors = require('cors');
const app = express();

app.use(express.json());
app.use(cors({
    origin: '*'
}));

app.get('/', function(req, res){
    res.send('<h1>Cervejas</h1>');
});

app.get('/cervejas', function(req, res){
    res.send(cervejas.read());
});

app.get('/cervejas/:id', function(req, res){
    res.send(cervejas.read_by_id(req.params.id));
});

app.post('/cervejas', function(req, res){
    let cerveja = req.body;
    res.send(cervejas.create(cerveja));
});
app.put('/cervejas/:id', function(req, res){
    let id_rota = req.params.id;
    let id_body = req.body.id;
    if(id_rota == id_body){
        let cerveja = req.body;
        res.send(cervejas.update(cerveja));
    }else{
        res.statusCode = 400;
        res.send('Dados Inválidos');
    }
    res.send(cervejas.update());
});
app.delete('/cervejas/:id', function(req, res){
    let id = req.params.id;
    res.send(cervejas.remove(id));
});

app.listen(3001);