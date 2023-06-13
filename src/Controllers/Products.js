import products from "../Models/Products"
import Category from "../Models/Category";
import { productSchema } from "../Schemas/schema";

export const getAllProducts = async (req, res) => {
    const { _sort = "createAt", _order = "asc", _limit = 20, _page = 1 } = req.query
    const options = {
        page: _page,
        limit: _limit,
        sort: {
            [req.query._sort]: req.query._order === "desc" ? -1 : 1
        }
    }
    try {
        // const data = await products.find();
        const { docs, totalDocs, totalPages } = await products.paginate({}, options)
        if (!docs) {
            return res.status(400).json({
                message: "Không có sản phẩm nào"
            })
        }
        return res.status(200).json(docs, totalDocs, totalPages)
    } catch (error) {
        return res.json({
            message: error.message
        })
    }
}
export const removeProducts = async (req, res) => {
    try {
        const product = await products.findByIdAndDelete(req.params.id)
        return res.status(200).json({
            message: "Bạn đã xóa sản phẩm thành công",
            product
        })
    } catch (error) {
        return res.status(400).json({
            message: error.message,
        })
    }
}
export const createProducts = async (req, res) => {
    try {
        const body = req.body
        const { error } = productSchema.validate(body,{ abortEarly: false })
        if (error) {
            const errors = error.details.map((errorItem) => errorItem.message)
            return res.status(400).json({
                message: errors
            })
        }
        const product = await products.create(body)
        await Category.findByIdAndUpdate(product.categoryId, {
            $addToSet: {
                Products: product._id
            }
        })
        if (!product) {
            return res.status(400).json({
                message: "Bạn đã thêm sản phẩm thành công",
                product
            })
        }
    } catch (error) {
        return res.json({
            message: error.message
        })
    }
}
export const updateProducts = async (req, res) => {
    try {
        const body = req.body
        const id = req.params.id
        // const { error } = productSchema.validate(body,{ abortEarly: false })
        // if (error) {
        //     const errors = error.details.map((errorItem) => errorItem.message)
        //     return res.status(400).json({
        //         message: errors
        //     })
        // }
        const product = await products.findOneAndUpdate({ _id: id }, body, { new: true })
        if (!product) {
            return res.status(400).json({
                message: "Cập nhật sản phẩm thất bạn "
            })
        }
        return res.status(200).json({
            message: "Cập nhật sản phẩm thành công"
        })
    } catch (error) {
        return res.status(400).json({
            message: error.message


        })
    }
}
export const getOneProducts = async (req, res) => {
    try {
        const data = await products.findOne({ _id: req.params.id }).populate({
            path: "categoryId"
        })
        if (!data) {
            return res.status(400).json({
                message: "Không có sản phẩm nào"
            })
        }
        return res.status(200).json(data)

    } catch (error) {
        return res.status(400).json({
            message: error.message
        })
    }
}