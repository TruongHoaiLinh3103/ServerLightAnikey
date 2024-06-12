const { DataTypes } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
    const Wishlist = sequelize.define("Wishlist" , {
        img: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        menu: {
            type: DataTypes.STRING,
            allowNull: false
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        rating: {
            type: DataTypes.TINYINT,
            allowNull: false,
        },
        user: {
            type: DataTypes.STRING,
            allowNull: false
        },
        productId: {
            type: DataTypes.INTEGER,
            allowNull: false,
        }
    })
    return Wishlist;
}