import LoginPage from '../pages/LoginPage';
import ProfilePage from '../pages/ProfilePage';
import BookStorePage from '../pages/BookstorePage';
import Commons from '../pages/Commons';

describe('Add and Delete Book Test Cases', () => {
    const loginPage = new LoginPage();
    const profilePage = new ProfilePage();
    const bookstorePage = new BookStorePage();
    const commons = new Commons();
    

    Cypress.on('uncaught:exception', (err, runnable) => {
        // returning false here prevents Cypress from
        // failing the test
        return false
      })

      beforeEach(() => {
        commons.openLoginPage();
        loginPage.login();
      }); 
      
      it('Test Case 1: User can add and delete a book successfully', () => {
        commons.goToBookStorePage();
        commons.verifyMainHeaderText('Book Store');
        bookstorePage.searchBookAndGoToBookPage('Speaking JavaScript');
        bookstorePage.addBook();
        commons.goToProfile();
        commons.verifyMainHeaderText('Profile');
        commons.verifyBookIsFound('Speaking JavaScript');
        profilePage.deleteBook();
        commons.verifyMainHeaderText('Profile');
        profilePage.verifyBookIsDeleted();

    
      });

      
    });    