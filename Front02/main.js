const express = require('express');
const ejs = require('ejs');

const app = express();

app.set('view engine','ejs')

app.get('/', function(req, res){
    const lista = ['a', 'b', 'c']
    res.render('index');
})

app.listen('3001');