export default {
    preset: 'ts-jest',
    testEnvironment: 'jsdom',
    transformIgnorePatterns: ['<rootDir>/node_modules/uuid'],
    moduleFileExtensions: ['js', 'ts', 'tsx'],
    transform: {
      '^.+\\.tsx?$': 'ts-jest',
    },
    moduleNameMapper: {
        "\.(css|less|sass|scss)$": "identity-obj-proxy",
        '\.(css|less)$': '<rootDir>/__mocks__/styleMock.js',
        'uuid': '<rootDir>/__mocks__/uuid.js', // Добавьте это для мокирования модуля uuid
    },
  };