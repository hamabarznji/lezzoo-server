const StoreService = require("../service/StoreService");

class StoreController {
    async addNewStore(req, res) {
        console.log(req.body);
        try {
            const newStore = await StoreService.addNewStore(req.body);
            res.status(200).send(newStore);
        } catch (err) {
            res.status(404).send(err);
        }
    }

    async updateStore(req, res) {
        try {
            const updateStore = await StoreService.updateStore(
                req.params.id,
                req.body
            );
            res.status(200).send(updateStore);
        } catch (err) {
            res.status(404).send(err);
        }
    }
    async deleteStore(req, res) {
        try {
            const deleteStore = await StoreService.deleteStore(req.params);
            res.status(200).send(deleteStore);
        } catch (err) {
            res.status(404).send(err);
        }
    }
    async getStores(req, res) {
        try {
            const stores = await StoreService.getStores();
            res.status(200).send(stores);
        } catch (err) {
            res.status(404).send(err);
        }
    }

    //finds a store with their products
    async getStoreByName(req, res) {
        try {
            const store = await StoreService.getStoreByName(req.params.name);
            res.status(200).send(store);
        } catch (err) {
            res.status(404).send(err);
        }
    }
}

module.exports = new StoreController();
