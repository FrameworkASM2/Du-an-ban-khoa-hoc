import User from "../Models/User";
import { signinSchema, signupSchema } from "../Schemas/schema";
import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken";

export const signup = async (req, res) => {
    try {
        const { error } = signupSchema.validate(req.body, { abortEarly: false });
        if (error) {
            return res.status(400).json({
                message: error.details.map((err) => err.message),
            });
        }
        const userExist = await User.findOne({ Email: req.body.Email });
        if (userExist) {
            return res.status(400).json({
                message: "Email đã tồn tại",
            })
        }
        const hashedPassword = await bcrypt.hash(req.body.Password, 10)

        const user = await User.create({
            Name: req.body.Name,
            Email: req.body.Email,
            Password: hashedPassword
        })
        const token = jwt.sign({ _id: user._id }, "Ma hop le", { expiresIn: "1d" });
        return res.status(201).json({
            accessToken: token,
            user
        })

        // return res.status(201).json(user)
    } catch (error) {
        return res.status(400).json({
            message: error
        })
    }
}

export const signin = async (req, res) => {
    try {
        const { error } = signinSchema.validate(req.body, { abortEarly: false });
        if (error) {
            return res.status(400).json({
                message: error.details.map((err) => err.message),
            });
        }
        const user = await User.findOne({ Email: req.body.Email });
        if (!user) {
            return res.status(400).json({
                message: "Email không tồn tại",
            })
        }
        const isMatch = await bcrypt.compare(req.body.Password, user.Password)
        if (!isMatch) {
            return res.status(400).json({
                message: "Sai mật khẩu"
            })
        }
        const token = jwt.sign({ _id: user._id }, "Ma hop le", { expiresIn: "1d" });
        return res.status(201).json({
            accessToken: token,
            user
        })
    } catch (error) {
        return res.status(400).json({
            message: error.message
        })
    }
}