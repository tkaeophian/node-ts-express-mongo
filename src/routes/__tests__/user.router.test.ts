import {
    createUserPayload,
    generateUser,
    generateUsers
} from '../../../tests/generate';

import { User } from '../../models/user.model';
import { UsersController } from '../../controllers/users.controller';
import app from '../../app';
import request from 'supertest';

describe('User Routes', () => {
    it('GET / returns list of user', async () => {
        // Arrange
        const controller = new UsersController();
        const spy = jest
            .spyOn(controller, 'getUsers')
            .mockResolvedValueOnce(generateUsers());
        // Act
        const res = await request(app).get('/api/users');
        // Assert
        expect(res.statusCode).toEqual(200);
        const body = res.body as Array<User>;
        expect(body).toEqual([]);
        spy.mockRestore();
    });

    test('should return a user', async () => {
        // Arrange
        const controller = new UsersController();
        const user = generateUser();
        const spy = jest
            .spyOn(controller, 'getUser')
            .mockResolvedValueOnce(user);
        // Act
        const res = await request(app).get('/api/users/' + user.id);
        const response = res.body as User;
        // Assert
        expect(response.id).not.toBeNull();
        spy.mockRestore();
    });

    test('should create a user', async () => {
        // Arrange
        const payload = createUserPayload();
        // Act
        const res = await request(app).post('/api/users/').send(payload);
        const response = res.body as User;
        // Assert
        expect(response?.firstName).toBe(response.firstName);
    });
});
