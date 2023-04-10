import express from 'express';
import {
  deleteUser,
  getSingleUser,
  getUsers,
  signUp,
} from '../controllers/user.js';

const userRouter = express.Router();

//Routes
userRouter.get('/', getUsers);
userRouter.get('/:id', getSingleUser);
userRouter.post('/', signUp);
userRouter.delete('/:id', deleteUser);

export default userRouter;
