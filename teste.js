const Sequelize = require('sequelize')
const sequelize = new Sequelize('teste2', 'root', 'Lancer@2022', {
    host: 'localhost',
    dialect: 'mysql'
})

sequelize.authenticate().then(function () {
    console.log("conectado com sucesso")
}).catch(function (error) {
    console.log("falha ao se conectar: " + error)
})