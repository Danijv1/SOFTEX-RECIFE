//import express from "express"; ou coloca a var express = require('express;'), é a mesa coisa

var express = require('express');

var app = express();

app.listen(8888);

//posso colocar '/daniele'ou qualquer coisa, isso é a rota () é a requisição do elemento que será dado
app.get('/',(request,response)=>{
    return response.send('Olá Mundo!');
});

app.get('/user',(request,response)=>{
    return response.send('Hello World!');
});

app.post('/', function (req, res) {
    return res.send('Got a POST request');
  });

app.put('/user', function (req, res) {
    res.send('Got a PUT request at /user');
  });

app.delete('/user', function (req, res) {
    res.send('Got a DELETE request at /user');
  });