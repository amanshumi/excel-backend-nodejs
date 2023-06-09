const sequelize = require("../config/db");
const Sequelize = require("sequelize");

const TaskList = sequelize.define("tasklist", {
    id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true
    },
    itemno: {
        type: Sequelize.STRING,
        allowNull: true
    },
    description: {
        type: Sequelize.STRING,
        allowNull: true
    },
    unit: {
        type: Sequelize.STRING,
        allowNull: true
    },
    qty: {
        type: Sequelize.STRING,
        allowNull: true
    },
    rate: {
        type: Sequelize.STRING,
        allowNull: true
    },
    amount: {
        type: Sequelize.STRING,
        allowNull: true
    },
});

module.exports = TaskList;