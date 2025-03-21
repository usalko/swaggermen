import '@testing-library/cypress/add-commands';

Cypress.Commands.add('redirectUnpkgToLocalDistFolder', packageName => {
  cy.task('readPackageDir', `packages/${packageName}/dist`).then(packageMap => {
    cy.intercept(`https://unpkg.com/@swaggermen/${packageName}/*`, req => {
      const fileName = req.url.replace(`https://unpkg.com/@swaggermen/${packageName}/`, '');
      req.reply({
        body: packageMap[fileName],
        statusCode: 200,
      });
    });
  });
});
