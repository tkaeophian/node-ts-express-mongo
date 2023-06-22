import express, { Request, Response } from 'express';
import UserController from '../controllers/user.controller';
import validatePayload from '../middleware/validatePayload';
import { createUserSchema } from '../schema/user.schema';

const router = express.Router();

router.get('/', async (req: Request, res: Response) => {
    const controller = new UserController();
    const response = await controller.getUsers();
    return res.send(response);
});

router.post(
    '/',
    validatePayload(createUserSchema),
    async (req: Request, res: Response) => {
        const controller = new UserController();
        const response = await controller.createUser(req.body);
        return res.send(response);
    }
);

router.get('/:id', async (req: Request, res: Response) => {
    const controller = new UserController();
    const response = await controller.getUser(req.params.id);
    if (!response) res.status(404).send({ message: 'No user found' });
    return res.send(response);
});

export default router;
