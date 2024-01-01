const { DataTypes } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
    const Wishlist = sequelize.define("Wishlist" , {
        imgOne: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        imgTwo: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        imgThree: {
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
        price: {
            type: DataTypes.FLOAT,
            allowNull: false,
        },
        rating: {
            type: DataTypes.TINYINT,
            allowNull: false,
        },
        text: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
        user: {
            type: DataTypes.STRING,
            allowNull: false
        }
    })
    return Wishlist;
}