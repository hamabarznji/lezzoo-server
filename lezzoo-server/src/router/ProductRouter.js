const router = require("express").Router();
const Auth = require("../../middleware/Auth");
const routes = require("../../routes.json");

const ProductController = require("../controller/ProductController");

router.get(
    routes.product.getProductsByid,
    Auth.verifyToken,
    ProductController.addNewProduct
);
router.get(
    routes.product.get,
    Auth.verifyToken,
    ProductController.getProductsByStoreId
);
router.post(
    routes.product.add,
    Auth.verifyToken,
    ProductController.addNewProduct
);
router.put(
    routes.product.update,
    Auth.verifyToken,
    ProductController.updateProduct
);
router.delete(
    routes.product.delete,
    Auth.verifyToken,
    ProductController.deleteProduct
);

module.exports = router;
