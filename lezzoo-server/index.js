require("dotenv").config();
const UserRouter = require("./src/router/UserRouter");
const ProductRouter = require("./src/router/ProductRouter");
const StoreRouter = require("./src/router/StoreRouter");
const cors = require("cors");
const express = require("express");
const app = express();
app.use(express.json());
app.use(cors());

app.use(UserRouter);
app.use(StoreRouter);
app.use(ProductRouter);

app.listen(process.env.PORT, () =>
    console.log("running on port " + process.env.PORT)
);
