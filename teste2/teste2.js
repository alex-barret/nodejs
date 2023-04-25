const Sequelize = require('sequelize')
const sequelize = new Sequelize('teste', 'root', 'Lancer@2022', {
    host: 'localhost',
    dialect: 'mysql'
})

//postagem

const Postagem = sequelize.define('postagens', {
    titulo: {
        type: Sequelize.STRING
    },
    conteudo: {
        type: Sequelize.TEXT
    }
})


const Usuario = sequelize.define('usuarios', {
    nome: {
        type: Sequelize.STRING
    },
    sobrenome: {
        type: Sequelize.STRING
    },
    idade: {
        type: Sequelize.INTEGER
    },
    email: {
        type: Sequelize.STRING
    }
})

Usuario.create({
    nome: 'Alex',
    sobrenome: "Lima",
    idade: 20,
    email: "blabla@gmail.com"

})

//Usuario.sync({ force: true })
