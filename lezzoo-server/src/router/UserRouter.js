const router = require("express").Router();
const Auth = require("../../middleware/Auth");
const routes = require("../../routes.json");

const UserController = require("../controller/UserController");

router.post(routes.user.login, UserController.addNewUser);
router.get(routes.user.auth, Auth.isAuthenticated);

module.exports = router;
