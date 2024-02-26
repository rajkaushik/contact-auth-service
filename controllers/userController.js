import {v4 as uuidv4} from 'uuid';
import {
    AddUser as addUser,
    FindUser as findUser,
    DeleteUser as deleteUser,
    UpdateUser as updateUser,
    LoginUser as loginUser
} from '../services/userService.js';
import { GetAllUser as getAllUser} from '../repository/userRepo.js';
import { GenerateToken } from '../auth/jwt.js';

export const FindUser = async (req, res) => {
    try {
        let result = await findUser(req.params.id);
        res.send({status: 200, message: result});
    } catch(err){
        res.send({status: 404, message: err.message});
    }
}

export const GetAllUser = async (req, res) => {
    try {
        let result = await getAllUser();
        res.send({status: 200, message: result});
    } catch(err){
        res.send({status: 404, message: err.message});
    }
}

export const DeleteUser = async (req, res) => {
    try {
        await deleteUser(req.params.id);
        res.send({status: 200, message: `User ${req.params.id} deleted successfully`});
    } catch(err){
        res.send({status: 404, message: err.message});
    }
}

export const UpdateUser = async (req, res) => {
    try {
        await updateUser(req.body);
        res.send({status: 200, message: `User ${req.params.firstname} updated successfully`});
    } catch(err){
        res.send({status: 404, message: err.message});
    }
}

export const AddUser = async(req, res) =>{
    try{
        await addUser({...req.body, _id: uuidv4()});
        res.send({status: 200, message: `User with ${req.body.firstname} added successfully`});
    } catch(err){
        res.send({status: 404, message: err.message});
    }
}

export const LoginUser = async (req, res) => {
    try {
        await loginUser(req.body);
        res.status(200).send({status: 200, token: GenerateToken(req.body)});
    } catch(err){
        res.send({status: 404, message: err.message});
    }
}