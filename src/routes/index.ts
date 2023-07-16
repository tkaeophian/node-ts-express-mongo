import PingRouter from './ping.router';
import UserRouter from './user.router';
import express from 'express';

const router = express.Router();

router.get('/health', (_, res) => res.sendStatus(200));
router.use('/api/ping', PingRouter);
router.use('/api/users', UserRouter);
export default router;
