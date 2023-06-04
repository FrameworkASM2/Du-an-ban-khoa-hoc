import express from "express";
import { checkPermission } from "../middlewares/CheckPermission";
import { createProducts, getAllProducts, getOneProducts, removeProducts, updateProducts } from "../Controllers/Products";

const router = express.Router();

router.get("/products", getAllProducts)
router.get("/products/:id", getOneProducts)
router.delete("/products/:id",checkPermission, removeProducts)
router.post("/products",  createProducts)
router.put("/products/:id",checkPermission, updateProducts)


export default router;