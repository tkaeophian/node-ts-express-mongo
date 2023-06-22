import express from 'express';
import validatePayload from '../middleware/validatePayload';
import { createUserSchema } from '../schema/user.schema';
import { getUsers, createUser, getUser } from '../controllers/user.controller';

const router = express.Router();

router.get('/', getUsers);

router.post('/', validatePayload(createUserSchema), createUser);

router.get('/:id', getUser);

export default router;
