var connection = require("./connection.js");

var pegarUsuario = function(nome,senha,email,nivel,pais,status){
    var usuarios = {
        nome:nome,
        senha:senha,
        email:email,
        nivel:nivel,
        pais:pais,
        status:status
    }
    var incluir = connection.query("INSERT INTO usuarios SET ?", usuarios , function(err,result){
        if(err){
            console.log("Não foi possivel incluir o usuário");
        }else{
            console.log("Usuário cadastro com sucesso!");
            
        }

    });
}
module.exports = pegarUsuario;










