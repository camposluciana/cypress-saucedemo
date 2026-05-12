import { login } from '../../pages/loginPage'

describe('Login SauceDemo', () => {

    beforeEach(() => {
        cy.visit('https://www.saucedemo.com/')
    })

    it('Deve acessar a página de login', () => {
        login('standard_user', 'secret_sauce')
        cy.url().should('include', 'inventory.html')
    })

    it('Não deve permitir login com senha inválida',() => {
        login('standard_user', 'senha_errada')
            cy.get('[data-test="error"]')
            .should('be.visible')
            .and('contain', 'Username and password do not match')
    })

    })

