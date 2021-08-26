import express from 'express';
import { createUser, getUsers, getSpesificUser, deleteUser, updateUser } from '../controllers/users.js';

const router = express.Router();

router.get('/', getUsers);

router.post('/', createUser);

router.get('/:id', getSpesificUser);

router.delete('/:id', deleteUser);

router.patch('/:id', updateUser);

export default router;