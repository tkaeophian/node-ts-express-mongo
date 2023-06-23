import log from './logger';

describe('Logger tests', () => {
    test('test logging', () => {
        // Act
        const spy = jest.spyOn(log, 'info').mockImplementation((msg) => msg);
        const logInfo = log.info('Hello World');
        // Assert
        expect(logInfo).toEqual('Hello World');
        spy.mockRestore();
    });
});
