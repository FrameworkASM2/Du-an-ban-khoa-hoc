import express from "express";
import { signin, signup } from "../Controllers/user";
import { checkPermission } from "../Middlewares/CheckPermission";

const router = express.Router();

router.post("/signup", signup)
router.post("/signin", signin)


export default router;