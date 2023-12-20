# projeto-automação-com-cypress

projeto feito em cypress usando javascript

# instalação do cypress e dependencias
1.numa pasta vazia digitar o comando: npm init -y
esse comand vai trazer um package.json que serve para configurar o projeto

2.depois digitar o seguinte comando: npm install cypress -D
esse comand vai baixar os recursos do cypress

3.outro comando importante: npx Cypress open
esse comand vai abrir a tela do cypress para nossas automações, selecionar teste e2e

# mudanças quando instalado todas dependencias:
# 1.em cypress.config.js colocar:

const { defineConfig } = require("cypress");
const cucumber = require("cypress-cucumber-preprocessor").default;

module.exports = defineConfig({

  e2e: {
    defaultCommandTimeout: 10000,
    baseUrl: "https://dev.cartaobrasilsaude.com.br/",
    specPattern: "**/*.feature",
    setupNodeEvents(on, config) {
        on("file:preprocessor", cucumber());
    },
  },
});

# 2.em package.json colocar: (verficando sempre versão do cypress e a cypress-cucumber-preprocessor, não pode faltar também o nonGlobalStepDefinitions :false)
{
  "devDependencies": {
    "cypress": "^13.3.1"
  },
  "cypress-cucumber-preprocessor": {
    "nonGlobalStepDefinitions": false,
    "step_definitions": "cypress/e2e/steps"
  },
  "dependencies": {
    "cypress-cucumber-preprocessor": "^4.3.1"
  }
}

# 3. criação dentro da pasta e2e de elements, features, pages e steps
exemplo de nomeação de arquivos: 
login_elements.js
login.feature
login_pages.js
login_steps.cy.js
