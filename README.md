# testsArchitecture
Repository dedicated to exampificate an automated test architecture.

1º criação do repositório no Github

2º Instalação do Git Bash p/ Windows

3º Abrir o Git Bash e executar os comandos:
    git config --global user.name "username"
    git config --global user.email "userEmail"

4º Clonar o repositório criado no Passo 1
    git clone <repo HTTPS key>

5º Instalação do Cypress
    npm install cypress

6º Abertura do Cypress
    node_modules/.bin/cypress open

7º Após isso será criada uma pasta 'Cypress' no diretório do projeto

8º Iniciar configuração da pasta 'support'

9º Instalação do cypress-cucumber-preprocessor
    npm install cypress-cucumber-preprocessor

10º Configuração Cypress/Cucumber
    <https://medium.com/cwi-software/testes-automatizados-com-cypress-e-cucumber-d78b211da766>

11º Instalação de dependências para geração do report
    https://vitormarinheiroautomation.medium.com/aprenda-a-gerar-reports-do-cypress-com-cucumber-4b31b21a46ab
    npm install multiple-cucumber-html-reporter

12º Configuração do dotenv
    https://www.npmjs.com/package/cypress-dotenv