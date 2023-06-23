import { PingController } from './ping.controller';

test('should return pong message', async () => {
    // Arrange
    const expectedResult = 'pong';
    const controller = new PingController();
    // Assert
    const response = await controller.getMessage();
    // Act
    expect(response.message).toBe(expectedResult);
});
