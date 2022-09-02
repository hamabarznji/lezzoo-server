const db = require("../../db-conn");
const Sequelize = require("sequelize");
const Store = db.define(
    "store",
    {
        id: {
            type: Sequelize.INTEGER(11),
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        name: {
            type: Sequelize.STRING(25),
            allowNull: false,
        },

        address: {
            type: Sequelize.STRING(50),
            allowNull: false,
        },

        status: {
            type: Sequelize.BOOLEAN(true),
            defaultValue: true,
        },
        imageSrc: {
            type: Sequelize.STRING(200),
            allowNull: false,
        },
    },
    {
        freezeTableName: true,
        timestamps: false,
    }
);

Store.sync({ alter: true });
module.exports = Store;
