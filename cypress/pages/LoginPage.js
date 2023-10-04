import { loginPageElements } from '../support/elements/loginPageElements';

class LoginPage {

  enterUsername(username) {
    cy.get(loginPageElements.userNameInput).type(username);
  }

  enterPassword(password) {
    cy.get(loginPageElements.passwordInput).type(password);
  }

  clickLoginButton() {
    cy.get(loginPageElements.loginButton).click();
  }

  verifyUserNameText(expectedText) {
    cy.get(loginPageElements.userNameText).should('have.text', expectedText);
  }

  verifyErrorMessage(expectedMessage) {
    cy.get(loginPageElements.errorMessage).should('have.text', expectedMessage);
  }

  verifyEmptyUsernameError(){
    cy.get(loginPageElements.userNameInput)
    .should('have.class', 'is-invalid');
  }

  verifyEmptyPasswordError(){
    cy.get(loginPageElements.passwordInput)
    .should('have.class', 'is-invalid');
  }

  login() {
    this.enterUsername('betim');
    this.enterPassword('Betim@123');
    this.clickLoginButton();
    this.verifyUserNameText('betim');
  }

}

export default LoginPage;
