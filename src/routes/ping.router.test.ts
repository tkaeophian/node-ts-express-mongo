import { PingResponse } from '../controllers/ping.controller';
import app from '../app';
import request from 'supertest';

describe('GET /ping', () => {
    it('returns pong', async () => {
        const res = await request(app).get('/api/ping');
        expect(res.statusCode).toEqual(200);

        const body = res.body as PingResponse;

        expect(body.message).toEqual('pong');
    });
});
