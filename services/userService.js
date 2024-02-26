import bcryptjs from 'bcryptjs';
import {
    AddUser as addUser, 
    FindUser as findUser,
    DeleteUser as deleteUser,
    UpdateUser as updateUser,
    GetAllUser as getAllUser,
    LoginUser as loginUser
} from '../repository/userRepo.js'

export const LoginUser = async (user) => {
    let result = await loginUser(user.email);
    if(result !== null) {
        if(bcryptjs.compareSync(user.password, result.password)){
            return true;
        } else {
            throw Error(`User ${user.email} password not matching`);
        }
    } else {
        throw Error(`User ${user.email} doest not exits`);
    }
}

export const FindUser = async (id) => {
    let result = await findUser(id);
    if(result !== null) {
        return result;
    } else {
        throw Error(`User ${firstname} doest not exits`);
    }
}

export const DeleteUser = async (id) => {
    let result = await findUser(id);
    if(result !== null) {
        await deleteUser(id);
    } else {
        throw Error(`User ${id} doest not exits`);
    }
}

export const UpdateUser = async (user) => {
    let result = await findUser(user._id);
    if(result !== null) {
        await updateUser(user);
    } else {
        throw Error(`User ${firstname} doest not exits`);
    }
}

export const AddUser = async(user) => {
    let result = await loginUser(user.email);
    if(result == null) {
        await addUser(user);
    } else {
        throw Error(`User ${user.firstname} already exits`);
    }
}