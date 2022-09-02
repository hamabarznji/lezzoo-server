const db = require("../../db-conn");
const Sequelize = require("sequelize");
const User = db.define(
    "user",
    {
        phone: {
            type: Sequelize.INTEGER(11),
            allowNull: false,
            primaryKey: true,
        },

        location: {
            type: Sequelize.STRING(),
            allowNull: true,
        },
    },
    {
        freezeTableName: true,
        timestamps: false,
    }
);

User.sync({ alter: true });
module.exports = User;
