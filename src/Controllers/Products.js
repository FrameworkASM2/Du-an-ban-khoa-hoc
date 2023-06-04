import products from "../Models/Products"
import Category from "../Models/Category";

export const getAllProducts = async (req, res) => {
    const { _sort = "createAt", _order = "asc", _limit = 20, _page = 1 } = req.query
    const options = {
        page: _page,
        limit: _limit,
        sort: {
            [req.query._sort]: req.query._order == "desc" ? -1 : 1
        }
    }
    try {
        // const data = await products.find();
        const { docs, totalDocs, totalPages } = await products.paginate({}, options)
        if (!data) {
            return res.status(400).json({
                message: "Không có sản phẩm nào"
            })
        }
        return res.status(200).json(data)
    } catch (error) {
        return res.json({
            message: error.message()
        })
    }
}
export const removeProducts = async (req, res) => {
    try {
        const product = await products.findByIdAndDelete(req.param.id)
        return res.status(200).json({
            message: "Bạn đã xóa sản phẩm thành công"
        })
    } catch (error) {
        return res.status(400).json({
            message: error.message
        })

    }
}
export const createProducts = async (req, res) => {
    try {
        const body = req.body
        const product = await products.create(body)
        await Category.findByIdAndUpdate(product.categoryId, {
            $addToSet: {
                products: product._id
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
        const id = req.param.id
        const product = await products.findByIdAndUpdate({ _id: id }, body, { new: true })
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
            message: error


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