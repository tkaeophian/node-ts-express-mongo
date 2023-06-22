import express, { Request, Response } from 'express';

import PingRouter from './ping.router';
import UserRouter from './user.router';

const router = express.Router();

router.get('/health', (_, res) => res.sendStatus(200));
router.use('/api/ping', PingRouter);
router.use('/api/users', UserRouter);
router.use('/api/error', (req: Request, res: Response, next) => {
    try {
        throw new Error(`Testing error handler`);
    } catch (err: any) {
        err.statusCode = 400;
        next(err);
    }
});
export default router;
