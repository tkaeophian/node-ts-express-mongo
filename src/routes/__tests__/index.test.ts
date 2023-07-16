import app from '../../app';
import request from 'supertest';

describe('Main Router Tests', () => {
    it('GET /health should return 200', async () => {
        // Act
        const res = await request(app).get('/health');
        // Assert
        expect(res.statusCode).toEqual(200);
    });
});
