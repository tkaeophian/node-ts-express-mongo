import request from 'supertest';
import app from '../app';

describe('GET /ping', () => {
    it('returns pong', async () => {
        const res = await request(app).get('/ping');
        expect(res.statusCode).toEqual(200);
        expect(res.body.message).toEqual('pong');
    });
});
