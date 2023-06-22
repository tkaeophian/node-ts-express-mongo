import express, { NextFunction, Request, Response } from 'express';

import { UsersController } from '../controllers/users.controller';
import { createUserSchema } from '../schema/user.schema';
import log from '../utils/logger';
import validatePayload from '../middleware/validatePayload';

const controller = new UsersController();
const router = express.Router();

router.get('/', async (req: Request, res: Response, next: NextFunction) => {
    try {
        const response = await controller.getUsers();
        return res.send(response);
    } catch (err: any) {
        next(err);
    }
});

router.post(
    '/',
    validatePayload(createUserSchema),
    async (req: Request, res: Response, next: NextFunction) => {
        try {
            const response = await controller.createUser(req.body);
            return res.send(response);
        } catch (err: any) {
            next(err);
        }
    }
);

router.get('/:id', async (req: Request, res: Response, next: NextFunction) => {
    try {
        const response = await controller.getUser(req.params.id);
        return res.send(response);
    } catch (err: any) {
        next(err);
    }
});

export default router;
