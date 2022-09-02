const StoreModel = require("../model/Store");

class StoreService {
    addNewStore = async (store) => {
        try {
            return await StoreModel.create(store);
        } catch (err) {
            return err;
        }
    };

    deleteStore = async (storeid) => {
        try {
            return await StoreModel.destroy({ where: { id: storeid } });
        } catch (err) {
            return err;
        }
    };

    updateStore = async (storeid, data) => {
        try {
            return await StoreModel.update(data, { where: { id: storeid } });
        } catch (err) {
            return err;
        }
    };

    getStores = async () => {
        try {
            return await StoreModel.findAll();
        } catch (err) {
            return err;
        }
    };

    getStoreByName = async (name) => {
        try {
            return await StoreModel.findOne({
                where: { name: name },
                include: { all: true },
            });
        } catch (err) {
            return err;
        }
    };
}

module.exports = new StoreService();
