import { bookStorePageElements } from '../support/elements/bookstorePageElements';
import Commons from './Commons';

class BookStorePage {
  searchBook(bookName) {
    cy.get(bookStorePageElements.searchBoxInput).type(bookName);
  }

  goToBookPage(bookName) {
    cy.contains('a', bookName).click();
  }

  verifyBookPage(bookName) {
    cy.contains(bookStorePageElements.bookPageTitle, bookName)
  }

  verifyBookIsFound(bookName) {
    cy.contains('a', bookName).should('exist');
  }

  searchBookAndGoToBookPage(bookName) {
    this.searchBook(bookName);
    this.verifyBookIsFound(bookName);
    this.goToBookPage(bookName);
    this.verifyBookPage(bookName);
  }

  addBook() {
    cy.contains('button', 'Add To Your Collection').click({ force: true });
  }


}

export default BookStorePage;
