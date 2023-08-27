const Sequelize = require('sequelize');

const sequelize = new Sequelize("workshop","root","",{
    dialect:"mysql",
    host:"localhost",
    port:3307
});

module.exports = sequelize;