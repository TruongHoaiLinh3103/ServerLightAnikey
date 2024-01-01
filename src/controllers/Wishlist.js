const { Wishlist } = require("../models");
const WishlistService = require("../services/Wishlist")

module.exports = {
    get: async (req, res) => {
        try {
            const { page = 1, limit = 4, orderBy = 'id', sortBy = 'asc', keyword } = req.query

            const data = await WishlistService.findAll({
                page: +page ? +page : 1,
                limit: +limit ? +limit : 4,
                orderBy,
                sortBy,
                keyword
            })
            return res.json({success: true, data})
        } catch (error) {
            res.send(error)
        }
    },
    post: async (req, res) => {
        const post = req.body
        await Wishlist.create(post)
        res.json(post)
    }
}