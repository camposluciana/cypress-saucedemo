# Cypress SauceDemo - Testes de Login

Projeto de automação de testes E2E utilizando Cypress, com testes voltados para o fluxo de autenticação do site [SauceDemo](https://www.saucedemo.com/).

## 🛠️ Tecnologias

- [Cypress](https://www.cypress.io/)
- JavaScript
- Page Object Model (POM)

## 📁 Estrutura do Projeto

cypress/
├── e2e/
│   └── 1-getting-started/
│       └── login.cy.js       # Testes de login
├── pages/
│   └── loginPage.js          # Page Object da página de login

🧪 Cenários Testados

* ✅ Login com credenciais válidas — deve redirecionar para a página de inventário
* ❌ Login com senha inválida — deve exibir mensagem de erro
* ❌ Login com usuário bloqueado — deve exibir mensagem de bloqueio
* ❌ Login com campos vazios — deve exibir mensagem de campo obrigatório
* ❌ Login sem senha — deve exibir mensagem de campo obrigatório
* ❌ Login sem usuário — deve exibir mensagem de campo obrigatório

## ▶️ Como executar

# Instalar dependências
npm install

# Abrir o Cypress
npx cypress open