import UserModel from "../models/userModel.js";
import bcryptjs from 'bcryptjs';

export const FindUser = async(id) => {
    return await UserModel.findOne({ where: { _id: id } });
}

export const GetAllUser = async () => {
    return await UserModel.findAll();
}

export const AddUser = async(user) => {
    let newUser = new UserModel({
        _id: user._id,
        firstname: user.firstname,
        lastname: user.lastname,
        email: user.email,
        password: bcryptjs.hashSync(user.password),
    })
    await newUser.save();
}

export const UpdateUser = async (user) => {
    await UserModel.update({ 
        firstname: user.firstname, 
        lastname: user.lastname,
        email: user.email,
        password: user.password,
    }, {
        where: {
            firstname: user._id
        }
    });
}

export const DeleteUser = async (id) => {
    await UserModel.destroy({
        where: {
          _id: id
        }
    });
}

export const LoginUser = async(email) => {
    return await UserModel.findOne({ where: { email: email } });
}