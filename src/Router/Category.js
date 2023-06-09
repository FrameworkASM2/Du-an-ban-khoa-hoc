import express from "express";
import { create, get, getAll, remove, update } from "../Controllers/Category";
import { checkPermission } from "../middlewares/CheckPermission";

const router = express.Router();

router.get("/categories", getAll)
router.get("/categories/:id", get)
router.delete("/categories/:id", checkPermission, remove)
router.post("/categories", checkPermission, create)
router.put("/categories/:id", checkPermission, update)

export default router;