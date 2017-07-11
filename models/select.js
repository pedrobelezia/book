var connection = require("./connection");

module.exports = {
    selectUser: function(req,res){

        connection.query("SELECT * FROM usuarios", function(err,result){
            if(err)
                throw err
            res.send(result);
         
            
        });
    }
}