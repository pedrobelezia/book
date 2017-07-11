app.service("selectUser", function($http){
    this.listaUser = function(){
        return $http.get("/pegarUser");
    }
});