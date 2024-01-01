const { Likes } = require("../models");

module.exports = {
    post: async (req, res) => {
        const { productId } = req.body;
        const UserId = req.user.id;
      
        const found = await Likes.findOne({
          where: { productId: productId, UserId: UserId },
        });
        if (!found) {
          await Likes.create({ productId: productId, UserId: UserId });
          res.json({ liked: true });
        } else {
          await Likes.destroy({
            where: { productId: productId, UserId: UserId },
          });
          res.json({ liked: false });
        }
    } 
}