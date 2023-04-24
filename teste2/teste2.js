const Sequelize = require('sequelize')
const sequelize = new Sequelize('teste', 'root', 'Lancer@2022', {
    host: 'localhost',
    dialect: 'mysql'
})

sequelize.authenticate().then(function () {
    console.log("conectado com sucesso")
}).catch(function (erro) {
    console.log("falha ao se conectar: " + erro)
})