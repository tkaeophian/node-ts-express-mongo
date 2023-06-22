import express, { Request, Response } from 'express';
import PingController from '../controllers/ping.controller';

const router = express.Router();

router.get('/', async (req: Request, res: Response) => {
    const controller = new PingController();
    const response = await controller.getMessage();
    return res.send(response);
});

export default router;
