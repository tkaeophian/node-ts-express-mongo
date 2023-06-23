import express, { NextFunction, Request, Response } from 'express';

import { UsersController } from '../controllers/users.controller';
import { createUserSchema } from '../schema/user.schema';
import validatePayload from '../middleware/validatePayload';

const controller = new UsersController();
const router = express.Router();

router.get('/', async (req: Request, res: Response, next: NextFunction) => {
    try {
        const response = await controller.getUsers();
        res.send(response);
    } catch (err) {
        next(err);
    }
});
/* eslint-disable  @typescript-eslint/no-unsafe-argument */
router.post(
    '/',
    validatePayload(createUserSchema),
    async (req: Request, res: Response, next: NextFunction) => {
        try {
            const response = await controller.createUser(req.body);
            res.send(response);
        } catch (err) {
            next(err);
        }
    }
);

router.get('/:id', async (req: Request, res: Response, next: NextFunction) => {
    try {
        const response = await controller.getUser(req.params.id);
        res.send(response);
    } catch (err) {
        next(err);
    }
});

export default router;
