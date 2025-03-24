module.exports = {
  ...require('../../jest.config'),
  reporters: [
    'default',
    ['jest-junit', { suiteName: 'swaggermen', outputFile: '<rootDir>/../../test-results/swaggermen/results.xml' }],
  ],
};
