

describe('Input form', () => {

  beforeEach(() => {
    cy.visit('http://localhost:5173/')
  })

  it('focuses input on load', () => {
    cy.focused()
      .should('have.class', 'todo__header-input')
  })

  it('accepts input', () => {
    const typedText = 'Проверка инпута'

    cy.get('.todo__header-input')
      .type(typedText)
      .should('have.value', typedText)
  })


  context('Form submission', () => {
    it.only('Adds a new todo on submit and switch one to complete', () => {
      cy.get('.todo__header-input')
        .type('Проверка инпута')
        .type('{enter}')
      cy.get('.todo__list li')
        .should('have.length', 3)
        .and('contain', 'Проверка инпута')
      cy.get('.todo__list li:nth-child(1)').click()
        .should('have.class', 'list__false')
    })
  })

})