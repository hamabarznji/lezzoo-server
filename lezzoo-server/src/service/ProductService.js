const ProductModel = require("../model/Product");

class ProductService {
    addNewProduct = async (store) => {
        try {
            return await ProductModel.create(store);
        } catch (err) {
            return err;
        }
    };

    deleteProduct = async (productid) => {
        try {
            return await ProductModel.destroy({ where: { id: productid } });
        } catch (err) {
            return err;
        }
    };

    updateProduct = async (productid, data) => {
        try {
            return await ProductModel.update(data, {
                where: { id: productid },
            });
        } catch (err) {
            return err;
        }
    };

    getProducts = async () => {
        try {
            return await ProductModel.findAll();
        } catch (err) {
            return err;
        }
    };

    getProductsByStoreId = async (id) => {
        try {
            return await ProductModel.findAll({ where: { store_id: id } });
        } catch (err) {
            return err;
        }
    };
}

module.exports = new ProductService();
