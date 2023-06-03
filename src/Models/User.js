import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    Name: String,
    Email: {
        type: String,
        unique: true,
        require: true
    },
    Password: {
        type: String,
        required: true
    },
    role: {
        type: String,
        default: "member"
    }
});

export default mongoose.model("User", UserSchema)