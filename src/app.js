import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import productRouter from "./Router/Products"
import categoryRouter from "./Router/Category"
import userRouter from "./Router/Auth"

const app = express();

app.use(express.json());
app.use(cors());
app.use("/api", productRouter)
app.use("/api", categoryRouter)
app.use("/api", userRouter)

// mongoose.connect(`mongodb://127.0.0.1:27017/framework1`);
mongoose.connect(`mongodb+srv://Framework1:framework1@course.xa11c8g.mongodb.net/asm2`);

export const viteNodeApp = app;
