import express from 'express';
import { AddUser, FindUser, DeleteUser, GetAllUser, UpdateUser, LoginUser } from '../controllers/userController.js';

const router = express.Router();

router.post('/register/user', AddUser);
router.put('/register/user', UpdateUser);
router.get('/register/user', GetAllUser);
router.get('/register/user/:id', FindUser);
router.delete('/register/user/:id', DeleteUser);

router.post('/login', LoginUser);

export default router;