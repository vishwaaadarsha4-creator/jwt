const userModel = (sequelize,DataTaypes)=>{
    const User = sequelize.define("user",{
        firstName: {
            type: DataTaypes.STRING,
            allowNull: false,
        },
        lastName: {
            type: DataTaypes.STRING,
            allowNull: false,
        },
        email: {
            type: DataTaypes.STRING,
            allowNull: false,
        },
        userName: {
            type: DataTaypes.STRING,
            allowNull: false,
        },
        password: {
            type: DataTaypes.STRING,
            allowNull: false,
        }
    });
    return User;
}

module.exports = userModel;