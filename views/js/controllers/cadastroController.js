app.controller("cadastroController", function($scope,salvarCadastro,selectUser,$templateCache){
    $scope.salvar = function(){
        salvarCadastro.criarUsuario(
        $scope.nome,
        $scope.senha,
        $scope.email,
        $scope.nivel,
        $scope.pais,
        $scope.status
        ).success(function(data){
            console.log(data);
        });
    }
    $scope.exibir = function(){
        selectUser.listaUser().success(function(data){
            $scope.exibir(data);
            $scope.listando = data;
            
        
        });

    }

    $scope.exibir();

});