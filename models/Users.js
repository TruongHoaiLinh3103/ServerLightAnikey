module.exports = (sequelize, DataTypes) => {
    const Users = sequelize.define("Users", {
        user: {
            type: DataTypes.STRING,
            allowNull: false
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false
        },
    });
    Users.associate = (model) => {
        Users.hasMany(model.Likes, {
            onDelete: "cascade",
        });
    }
    return Users;
}