import { login } from '../../pages/loginPage'

describe('Login SauceDemo', () => {
    beforeEach(() => {
        cy.visit('https://www.saucedemo.com/')
    })

    it('Deve acessar a página de login', () => {
        login('standard_user', 'secret_sauce')
        cy.url().should('include', 'inventory.html')
    })

    it('Não deve permitir login com senha inválida', () => {
        login('standard_user', 'senha_errada')
        cy.get('[data-test="error"]')
            .should('be.visible')
            .and('contain', 'Username and password do not match')
    })

    it('Não deve permitir login com usuário bloqueado', () => {
        login('locked_out_user', 'secret_sauce')
        cy.get('[data-test="error"]')
            .should('be.visible')
            .and('contain', 'Sorry, this user has been locked out')
    })

    it('Não deve permitir login com campos vazios', () => {
    cy.get('#login-button').click()
    cy.get('[data-test="error"]')
        .should('be.visible')
        .and('contain', 'Username is required')
})

    it('Não deve permitir login sem senha', () => {
    cy.get('#user-name').type('standard_user')
    cy.get('#login-button').click()
    cy.get('[data-test="error"]')
        .should('be.visible')
        .and('contain', 'Password is required')
})

    it('Não deve permitir login sem usuário', () => {
    cy.get('#password').type('secret_sauce')
    cy.get('#login-button').click()
    cy.get('[data-test="error"]')
        .should('be.visible')
        .and('contain', 'Username is required')
})
})

