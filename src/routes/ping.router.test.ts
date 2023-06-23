import { PingResponse } from '../controllers/ping.controller';
import app from '../app';
import request from 'supertest';

describe('GET /ping', () => {
    it('should return pong', async () => {
        // Act
        const res = await request(app).get('/api/ping');
        // Assert
        expect(res.statusCode).toEqual(200);
        const body = res.body as PingResponse;
        expect(body.message).toEqual('pong');
    });
});
