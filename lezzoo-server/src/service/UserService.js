const UserModel = require("../model/User");

class UserService {
    addNewUser = async (user) => {
        try {
            return await UserModel.create(user);
        } catch (err) {
            return err;
        }
    };

    findUserByPhone = async (phone) => {
        try {
            return await UserModel.findOne({ where: { phone: phone } });
        } catch (err) {
            return err.message;
        }
    };
}

module.exports = new UserService();
