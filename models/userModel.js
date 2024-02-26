import { Sequelize, DataTypes } from "sequelize";
import 'dotenv/config'

const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USERNAME, process.env.DB_PASSWORD, {
    host: process.env.HOST_NAME,
    dialect: process.env.DB_USERNAME
});

const UserModel = sequelize.define('users', {
    _id: {
        type: DataTypes.STRING,
    },
    firstname: {
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
    }
});

(async () => {
    await sequelize.sync();
})();

export default UserModel;