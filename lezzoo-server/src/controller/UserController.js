const UserService = require("../service/UserService");
const Auth = require("../../middleware/Auth");
class UserController {
    async addNewUser(req, res) {
        console.log(req.body);
        try {
            const token = Auth.userTokenGenerator(req.body.phone);

            const foundedUser = await UserService.findUserByPhone(
                req.body.phone
            );

            if (foundedUser) {
                res.status(200).send({
                    phone: foundedUser.phone,
                    token: token,
                    status: "login",
                });
            } else {
                const user = await UserService.addNewUser(req.body);
                res.status(200).send({
                    phone: user.phone,
                    token: token,
                    status: "singup",
                });
            }
        } catch (err) {
            return err;
        }
    }
}

module.exports = new UserController();
