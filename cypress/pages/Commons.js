import { commonElements } from "../support/elements/commonElements";

class Commons {

  visit() {
    cy.visit(commonElements.loginUrl);
  }

  verifyMainHeaderText(expectedText) {
    cy.get(commonElements.mainHeader).should('have.text', expectedText);
  }

  openLoginPage(){
    this.visit();
    this.verifyMainHeaderText('Login');
  }

  goToProfile() {
    cy.get(commonElements.profileButton).click();
  }

  goToBookStorePage() {
    cy.get(commonElements.bookStoreButton).scrollIntoView().click();
  }

  verifyBookIsFound(bookName) {
    cy.contains('a', bookName).should('exist');
  }

}

export default Commons; 