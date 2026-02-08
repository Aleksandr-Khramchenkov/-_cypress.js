describe('Проверка авторизации', function () {

   it('Верный пароль и верный логин', function () {
        cy.visit('https://login.qa.studio/');
        cy.get('#mail').type('login');
        cy.get('#pass').type('password');
        cy.get('#loginButton').click();
        cy.get('#messageHeader').contains('Авторизация прошла успешно');
        cy.get('#messageHeader').should('be.visible');
        cy.get('#exitMessageButton > .exitIcon').should('be.visible');
});
    it('Верный логин и неверный пароль', function () {
        cy.visit('https://login.qa.studio/');
        cy.get('#mail').type('login');
        cy.get('#pass').type('password');
        cy.get('#loginButton').click();
        cy.get('#messageHeader').contains('Такого логина или пароля нет');
        cy.get('#messageHeader').should('be.visible');
        cy.get('#exitMessageButton > .exitIcon').should('be.visible');
});

    it('Проверка восстановления пароля', function () {
        cy.visit('https://login.qa.studio/');
        cy.get('#forgotEmailButton').click();
        cy.get('#mailForgot').type('alxhav@gmail.com');
        cy.get('#restoreEmailButton').click();
        cy.get('#messageHeader').contains('Успешно отправили пароль на e-mail');
        cy.get('#exitMessageButton > .exitIcon').should('be.visible');

});
    it('Неверный логин и верный пароль', function () {
        cy.visit('https://login.qa.studio/');
        cy.get('#mail').type('login');
        cy.get('#pass').type('password');
        cy.get('#loginButton').click();
        cy.get('#messageHeader').contains('Такого логина или пароля нет');
        cy.get('#messageHeader').should('be.visible');
        cy.get('#exitMessageButton > .exitIcon').should('be.visible');
});
    it('Логин без @ и верный пароль', function () {
        cy.visit('https://login.qa.studio/');
        cy.get('#mail').type('login');
        cy.get('#pass').type('password');
        cy.get('#loginButton').click();
        cy.get('#messageHeader').contains('Нужно исправить проблему валидации');
        cy.get('#messageHeader').should('be.visible');
        cy.get('#exitMessageButton > .exitIcon').should('be.visible');
});
    it('Строчные буквы в логине', function () {
        cy.visit('https://login.qa.studio/');
        cy.get('#mail').type('login');
        cy.get('#pass').type('password');
        cy.get('#loginButton').click();
        cy.get('#messageHeader').contains('Авторизация прошла успешно');
        cy.get('#messageHeader').should('be.visible');
        cy.get('#exitMessageButton > .exitIcon').should('be.visible');
});
});

