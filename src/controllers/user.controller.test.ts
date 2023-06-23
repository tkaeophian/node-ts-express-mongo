import { UsersController } from './users.controller';
import { generateUsers } from '../../tests/generate';
describe('User controller tests', () => {
    test('should return list of user', async () => {
        // Arrange
        const controller = new UsersController();
        const users = generateUsers();
        const spy = jest
            .spyOn(controller, 'getUsers')
            .mockResolvedValueOnce(users);
        // Act
        const response = await controller.getUsers();
        // Assert
        expect(response.length).toBe(users.length);
        spy.mockRestore();
    });
});
