import express from "express";
const router = express.Router();
import productController from "../controllers/product.controller.js";
const { getProducts, getProduct, createProduct, updateProduct, deleteProduct } = productController;

router.get("/", getProducts);
router.get("/:id", getProduct);
router.post("/", createProduct);
router.put("/:id", updateProduct);
router.delete("/:id", deleteProduct);

export default router;