import LoginPage from '../pages/LoginPage';
import ProfilePage from '../pages/ProfilePage';
import BookStorePage from '../pages/BookstorePage';
import Commons from '../pages/Commons';

describe('Search Test Cases', () => {
    const loginPage = new LoginPage();
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
      
      it('Test Case 1: User can search a book successfully', () => {
        commons.goToBookStorePage();
        commons.verifyMainHeaderText('Book Store');
        bookstorePage.searchBook('Speaking');
        commons.verifyBookIsFound('Speaking JavaScript');
    
      });
      
    });    