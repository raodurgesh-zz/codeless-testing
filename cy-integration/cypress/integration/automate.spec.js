/// <reference types="Cypress" />

// import steps from '../fixtures/record';

// function canonicalStep(steps) {
//   return steps.filter((s, i) => {
//     if (i === 0) {
//       return true;
//     }
//     let prev = steps[i - 1];
//     if (s.el === 'html') {
//       return false;
//     }
//     if (s.el === prev.el && s.opt === prev.opt) {
//       return false;
//     }
//     if (s.opt === 'write' && s.data.text === '') {
//       return false;
//     }
//     return true;
//   });
// }

describe('Automatation Testsuit', () => {
  it('Perform actions behalf of user', () => {
    fetch('http://localhost:2000/action-record')
      .then((res) => res.json())
      .then((steps) => {
        if (steps.length === 0) return;
        // steps = canonicalStep(steps);

        let url = steps[0].page;
        cy.visit(url).then(() => {});
        performOperation(steps.shift());

        function performOperation(step) {
          if (!step) return;
          if (step.opt === 'write') {
            cy.getElementWithIdentifiers(step).then((el) => {
              cy.wrap(el[0]).clear().type(step.data.text);
            });
          } else {
            let btn = cy.get(step.identifers.xPath);
            btn.click();
            cy.getElementWithIdentifiers(step).then((el) => {
              cy.wrap(el[0]).click();
            });
          }
          performOperation(steps.shift());
        }
      });
  });
});
