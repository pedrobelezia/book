var express = require("express");
var mysql = require("mysql");
var bodyParser = require("body-parser");
var connection = require("./models/connection");
var usuarios = require("./models/usuario");
var select = require("./models/select");




app =  express();
app.set("view engine","ejs");
app.use(express.static(__dirname + "/views"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.get("/", function(req,res){

    res.render('index');
});


app.get("/pegarUser", select.selectUser);




//salvar usuario
app.post("/salvarCadastro", function(req,res){
    nome = req.body.nome;
    senha = req.body.senha;
    email = req.body.email;
    nivel = req.body.nivel;
    pais = req.body.pais;
    status = req.body.status;
    usuarios(nome,senha,email,nivel,pais,status);
});





//inicia servidor
app.listen(80);