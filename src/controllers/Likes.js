const { Likes } = require("../models");

module.exports = {
    post: async (req, res) => {
        const { commentId } = req.body;
        const UserId = req.user.id;
      
        const found = await Likes.findOne({
          where: { CommentId: commentId, UserId: UserId },
        });
        if (!found) {
          await Likes.create({ CommentId: commentId, UserId: UserId });
          res.json({ liked: true });
        } else {
          await Likes.destroy({
            where: { CommentId: commentId, UserId: UserId },
          });
          res.json({ liked: false });
        }
    } 
}