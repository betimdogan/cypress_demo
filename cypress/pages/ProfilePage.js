import { profilePageElements } from '../support/elements/profilePageElements';

class ProfilePage {


  changeAndVerifyRowNumber(rowNumber) {
    cy.get('select').select(rowNumber);
    cy.get('select').should('have.value', rowNumber);
  }

  deleteBook() {
    cy.get(profilePageElements.deleteButton).click();
    cy.get(profilePageElements.deleteConfirmButton).click();
  }

  verifyBookIsDeleted() {
    cy.get(profilePageElements.noRowsFoundMessage)
      .should('exist')
      .and('contain', 'No rows found');

  }

}

export default ProfilePage;