import ApiError, { StatusCodes } from '../utils/apiError';
import express, { Request, Response } from 'express';

import PingRouter from './ping.router';
import UserRouter from './user.router';

const router = express.Router();

router.get('/health', (_, res) => res.sendStatus(200));
router.use('/api/ping', PingRouter);
router.use('/api/users', UserRouter);
router.use('/api/error', (req: Request, res: Response, next) => {
    try {
        throw ApiError('Testing error handler', StatusCodes.BAD_REQUEST);
    } catch (err: any) {
        next(err);
    }
});
export default router;
