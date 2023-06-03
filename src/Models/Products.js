import mongoose from "mongoose";
import mongoosePaginate from 'mongoose-paginate-v2'

const productsSchema = mongoose.Schema({
    Name: String,
    Price: Number,
    Image: String,
    Description: String,
    categoryId: {
        type: mongoose.Types.ObjectId,
        ref: "Category"
    },
})
productsSchema.plugin(mongoosePaginate)
export default mongoose.model("Products", productsSchema)