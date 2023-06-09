import Jwt from "jsonwebtoken";
import user from "../Models/User"

export const checkPermission = async (req, res, next) => {
    try {
        if (!req.headers.authorization) {
            return res.status(400).json({
                message: "Bạn chưa đăng nhập"
            })
        }
        const token = req.headers.authorization.split(" ")[1];
        Jwt.verify(token, "Ma hop le", async (error, payload) => {
            if (error) {
                if (error.Name == "TokenExpiredError") {
                    return res.json({
                        message: "Token hết hạn"
                    })
                }
                if (error.Name == "JsonWebTokenError") {
                    return res.json({
                        message: "Token không hợp lệ"
                    })
                }
            }
            const users = await user.findById(payload._id);

            console.log("user", users);

            if (users.role !== "admin") {
                return res.status(400).json({
                    message: "Bạn không có quyền truy cập vào tài nguyên này"
                })
            }
            next();
        })
    } catch (error) {
        return res.json({
            message: error.message
        })
    }
}