module.exports = {
  ...require('../../jest.config'),
  reporters: [
    'default',
    [
      'jest-junit',
      { suiteName: 'swaggermen-dev-portal', outputFile: '<rootDir>/../../test-results/swaggermen-dev-portal/results.xml' },
    ],
  ],
};
