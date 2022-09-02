const router = require("express").Router();
const routes = require("../../routes.json");
const Auth = require("../../middleware/Auth");
const StoreController = require("../controller/StoreController");

router.get(routes.store.get, Auth.verifyToken, StoreController.getStoreByName);
router.get(
    routes.store.getSoteByName,
    Auth.verifyToken,
    StoreController.getStoreByName
);
router.post(routes.store.add, Auth.verifyToken, StoreController.addNewStore);
router.put(routes.store.update, Auth.verifyToken, StoreController.updateStore);
router.delete(
    routes.store.update,
    Auth.verifyToken,
    StoreController.deleteStore
);

module.exports = router;
