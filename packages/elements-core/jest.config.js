module.exports = {
  ...require('../../jest.config'),
  reporters: [
    'default',
    [
      'jest-junit',
      { suiteName: 'swaggermen-core', outputFile: '<rootDir>/../../test-results/swaggermen-core/results.xml' },
    ],
  ],
};
