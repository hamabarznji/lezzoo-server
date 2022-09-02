const ProductService = require("../service/ProductService");

class ProductController {
    async addNewProduct(req, res) {
        try {
            const newProduct = await ProductService.addNewProduct(req.body);
            res.status(200).send(newProduct);
        } catch (err) {
            res.status(404).send(err);
        }
    }

    async updateProduct(req, res) {
        try {
            const updateProduct = await ProductService.updateProduct(
                req.params.id,
                req.body
            );
            res.status(200).send(updateProduct);
        } catch (err) {
            res.status(404).send(err);
        }
    }
    async deleteProduct(req, res) {
        try {
            const deleteProduct = await ProductService.deleteProduct(
                req.params
            );
            res.status(200).send(deleteProduct);
        } catch (err) {
            res.status(404).send(err);
        }
    }
    async getProducts(req, res) {
        try {
            const products = await ProductService.getProducts();
            res.status(200).send(products);
        } catch (err) {
            res.status(404).send(err);
        }
    }
    async getProductsByStoreId(req, res) {
        try {
            const products = await ProductService.getProductsByStoreId(
                req.params.id
            );
            res.status(200).send(products);
        } catch (err) {
            res.status(404).send(err);
        }
    }
}

module.exports = new ProductController();
