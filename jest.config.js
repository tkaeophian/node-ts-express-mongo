module.exports = {
    preset: 'ts-jest',
    clearMocks: true,
    testEnvironment: 'node',
    roots: ['<rootDir>/tests', './src'],
    setupFiles: ['<rootDir>/tests/setup.ts'],
    transform: {
        '^.+\\.(ts|tsx)?$': 'ts-jest'
    },
    collectCoverage: true,
    collectCoverageFrom: ['src/**/*.{js,ts}']
};
