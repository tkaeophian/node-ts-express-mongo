import log from './logger';

describe('Logger tests', () => {
    test('test logging', () => {
        // Act
        const logInfo = log.info('Hello World');
        // Assert
        expect(logInfo).toEqual('Hello World');
    });
});
