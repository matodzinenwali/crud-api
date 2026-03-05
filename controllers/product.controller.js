import Product from "../models/product.model.js";

export default class ProductController {
    
    static async getProducts(req, res) {
        try {
            const products = await Product.find({});
            res.status(200).json(products);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    };

    static async getProduct(req, res) {
        try {
            const { id } = req.params;
            const product = await Product.findById(id);
            res.status(200).json(product);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    };

    static async createProduct(req, res) {
        try {
            const product = await Product.create(req.body);
            res.status(200).json(product);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    static async updateProduct(req, res) {
        try {
            const { id } = req.params;
            const product = await Product.findByIdAndUpdate(id, req.body);
            if (!product) {
                res.status(404).json({ message: "Product not found" });
            }
            const updatedProduct = await Product.findById(id);
            res.status(200).json(updatedProduct);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    static async deleteProduct(req, res) {
        try {
            const { id } = req.params;
            const product = await Product.findByIdAndDelete(id);
            if (!product) {
                res.status(404).json({ message: "Product not found" });
            }
            res.status(200).json({ message: "Product successfully deleted" });
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }
}
