import mongoose from "mongoose";
const CategorySchema = mongoose.Schema({
    Name: String,
    Products: {
        type: mongoose.Types.ObjectId, ref: "Products"
    }
})
export default mongoose.model("Category", CategorySchema)