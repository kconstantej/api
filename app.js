//introduccion a express
//se crea un cosntante express que requiere a la libreia express
const express = require('express');
//se crea un cosntante app que llama a express
const app = express();
//se crea un cosntante hbs que requiere a la libreia hbs
const request = require('request');

const hbs = require('hbs');

const async = require('async');

hbs.registerPartials(__dirname + '/views/parciales');



app.set('view engine','hbs');

var usuarios = require('./usuarios.json');



const port =process.env.PORT || 3000;

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
 
    next();
});

app.get('/',(request, res)=>{
    res.json(usuarios);
});

app.listen(port,()=>{
    console.log(`escuchando por el puerto ${port}`)
})

app.get('/home', function (req, res) {
        casa={
            nombre:'ken',
            usu:usuarios
        }
        res.render('home',casa);
    });