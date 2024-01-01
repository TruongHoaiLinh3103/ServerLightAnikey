module.exports = (sequelize, DataTypes) =>  {
    const Comment = sequelize.define("Comment", {
        img: {
            type: DataTypes.STRING,
            allowNull: false
        },
        user: {
            type: DataTypes.STRING,
            allowNull: false
        },
        productName: {
            type: DataTypes.STRING,
            allowNull: false
        },
        comment: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        productId: {
            type: DataTypes.INTEGER,
            allowNull: false,
        }
    })

    return Comment;
}