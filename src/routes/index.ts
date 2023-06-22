import express, { Request, Response } from 'express';
import PingController from '../controllers/ping.controller';
import UserRouter from './user.router';
import PingRouter from './ping.router';
const router = express.Router();

router.get('/health', (_, res) => res.sendStatus(200));
router.use('/api/ping', PingRouter);
router.use('/api/users', UserRouter);

export default router;
