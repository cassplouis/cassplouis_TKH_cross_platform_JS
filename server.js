var express = require("express"),
	bodyParser = require("body-parser"),
    auth = require("./app/auth/passport-local"),
    routes = require("./app/routes/routes"),
    app = express(),
	path = require("path");
    //CPL_7.23.2017

app.use("/client", express.static(path.join(__dirname, "exam/client")));
app.use("/templates", express.static(path.join(__dirname, "exam/client/templates")));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));


//CPL_7.23.2017

app.use(controllers.initialize());
app.use(ontrollers.session());

app.set("routes", path.join(__dirname, "app/routes"));

auth(controllers);
routes(app, controllers);

app.listen(process.env.PORT || 8080) //CPL_7.23.2017
console.log("server is running");