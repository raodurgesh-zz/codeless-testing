// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })

Cypress.Commands.add('injectCSS', (step, options = {}) => {
  cy.$$('html').append(
    '<style>* { font-family: Helvetica !important; } html { overflow-y: hidden; }</style>'
  );
});

Cypress.Commands.add('getElementWithIdentifiers', (step, options = {}) => {
  function getElByXPath(path) {
    return cy.$$(path);
  }

  function getElDefault(identifer) {
    let selector = `${identifer.tag}${
      identifer.id ? identifer.id : ''
    }${identifer.class.join('')}`; //${identifer.attributes.join('')}

    let el = cy.$$(selector);
    return el;
  }

  function getElementByIdentifer(key, identifer) {
    let el;
    switch (key) {
      case 'xPath':
        el = getElByXPath(identifer['xPath']);
        break;
      default:
        el = getElDefault(identifer);
        break;
    }
    return el;
  }

  function getElement(step) {
    let el = null;
    let keys = Object.keys(step.identifers);
    for (let i = 0; i < keys.length; i++) {
      const key = keys[i];
      el = getElementByIdentifer(key, step.identifers);
      if (el.length) {
        if (el.length > 1) {
          let el_ = getElDefault(step.identifers).toArray();
          el = el.toArray().find((e) => el_.includes(e));
        }
        break;
      }
    }

    return el;
  }

  /**
   * This function is recursively called untill the timeout passes or the upcomming
   * assertion passes. Keep this function as fast as possible.
   *
   * @return {Promise}
   */
  function resolveGetElementWithIdentifiers() {
    const el = getElement(step);

    // Test the upcomming assertion where aThing is the value used to assert.
    return cy.verifyUpcomingAssertions(el, options, {
      // When the upcoming assertion failes first onFail is called
      // onFail: () => {},
      // When onFail resolves onRetry is called
      onRetry: resolveGetElementWithIdentifiers,
    });
  }

  return resolveGetElementWithIdentifiers();
});

Cypress.Commands.add('login', (options = {}) => {
  // grab the user

  // create the user first in the DB
  cy.request({
    url: '/api/account/login', // assuming you've exposed a seeds route
    method: 'POST',
    body: { email: 'rraj@xavient.com', password: '1@34567b' },
  })
    .its('body')
    .then((body) => {
      return {};
    });
});
