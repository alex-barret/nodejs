const express = require("express");
const app = express();
const handlebars = require('express-handlebars')
const Sequelize = require('sequelize')

// config
//tamplate engine
app.engine("handlebars", handlebars.engine({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

//conexão com o banco de dados mysql
const sequelize = new Sequelize('teste', 'root', 'Lancer@2022', {
    host: 'localhost',
    dialect: 'mysql'
})
//Rotas
app.get('/cad', function (req, res) {
    res.render('formulario')
})

app.listen(8081, function () {
    console.log("servidor rodando na url http://localhost:8081");
}); 