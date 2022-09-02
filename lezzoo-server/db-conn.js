const Sequelize = require("sequelize");
const db = require("./db-conn");
const sequelize = new Sequelize(
    process.env.DATABASE_NAME,
    process.env.DATABASE_USER,
    process.env.DATABASE_PASSWORD,
    {
        host: "localhost",

        dialect: "mysql",
        operatorsAlias: false,
    }
);
sequelize
    .authenticate()
    .then(() => {
        console.log("Connection has been established successfully.");
    })
    .catch((err) => console.log("Unable to connect to the database." + err));
module.exports = sequelize;
