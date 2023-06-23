import ApiError, { StatusCodes } from './apiError';

describe('Api Error tests', () => {
    test('should return 202 status code', () => {
        // Arrange
        const errorMessage = 'Test';
        const statusCode = StatusCodes.ACCEPTED;
        // Act
        const error = ApiError(errorMessage, statusCode);
        // Assert
        expect(error.statusCode).toBe(statusCode);
        expect(error.message).toBe(errorMessage);
    });
});
