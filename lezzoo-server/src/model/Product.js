const db = require("../../db-conn");
const Sequelize = require("sequelize");
const StoreModel = require("./Store");
const Product = db.define(
    "product",
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
        store_id: {
            type: Sequelize.INTEGER(11),
            allowNull: false,
            references: {
                model: StoreModel,
                field: "id",
            },
            qty: {
                type: Sequelize.INTEGER(11),
                allowNull: false,
            },
        },
    },
    {
        freezeTableName: true,
        timestamps: false,
    }
);

Product.sync({ alter: true });
module.exports = Product;
