const { Sequelize } = require("sequelize");
const sequelize = require("sequelize");

const db = new Sequelize("excel", "root", "password", {
    dialect: "mysql",
    host: "localhost"
});

module.exports = db;