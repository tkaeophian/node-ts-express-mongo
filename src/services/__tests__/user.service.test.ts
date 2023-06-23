import {
    createUserPayload,
    generateUser,
    generateUsers
} from '../../../tests/generate';

import UserService from '../user.service';

describe('User service tests', () => {
    test('should return list of user', async () => {
        // Arrange
        const service = new UserService();
        const users = generateUsers();
        const spy = jest
            .spyOn(service, 'getUsers')
            .mockResolvedValueOnce(users);
        // Act
        const response = await service.getUsers();
        // Assert
        expect(response.length).toBe(users.length);
        spy.mockRestore();
    });

    test('should return a user', async () => {
        // Arrange
        const service = new UserService();
        const user = generateUser();
        const spy = jest.spyOn(service, 'getUser').mockResolvedValueOnce(user);
        // Act
        const response = await service.getUser(user.id);
        // Assert
        expect(response?.id).toBe(user.id);
        spy.mockRestore();
    });

    test('should create a user', async () => {
        // Arrange
        const service = new UserService();
        const payload = createUserPayload();
        // Act
        const response = await service.createUser(payload);
        // Assert
        expect(response.firstName).toBe(payload.firstName);
    });
});
