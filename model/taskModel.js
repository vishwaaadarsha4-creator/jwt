const taskModel = (sequelize,DataTypes)=>{
    const Task = sequelize.define("task",{
        title: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        description: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        status: {
            type: DataTypes.STRING,
            allowNull: false,
        }
    });
    return Task;
}

module.exports = taskModel;