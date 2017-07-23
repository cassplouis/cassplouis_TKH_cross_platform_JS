var db = require("../db/database");
var path = require("path");

module.exports = function(app){
    app.get("*", function(req, res){
        res.sendFile(path.join(__dirname, "../client/index.html"));
    });

    app.get("/api/data", function(req, res){
        //I just need to send all the data to the angular app so i can show all my users. Help me?!
    });

    app.post("/api/post", function(req, res){
        new db: (
            name: 'CassBass'
            age: '30'
            occupation: 'Manager'
        })
    });

    app.put("/api/update/:id", function(req, res){
    app.put(r.update, controllers.session, controllers.examCtrl.update);
        db.findByIdAndUpdate()
    });

    app.delete("/api/delete/:id", function(req, res){
    app.delete(r.delete, controllers.session, controllers.examCtrl.delete);
    });
}




