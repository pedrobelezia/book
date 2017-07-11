app.service("salvarCadastro", function($http){

    this.criarUsuario =  function(nome,senha,email,nivel,pais,status){

        return $http.post("/salvarCadastro",{
            nome:nome,
            senha:senha,
            email:email,
            nivel:nivel,
            pais:pais,
            status:status

        });

    }

})