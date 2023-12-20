Feature: Login Saucedemo

  Scenario: Login com simples com sucesso
    Given que eu esteja na tela de Login
    When eu preencher os dados de login na plataforma da Saucedemo
    And clicar no botão login
    Then terei feito o login com sucesso

  Scenario: Login com insucesso
    Given que eu queira fazer uma tentativa incorreta
    When eu preencher incorretamente os dados da plataforma
    And clicar em logar
    Then receberei um aviso de erro
    