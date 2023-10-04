import LoginPage from '../pages/LoginPage';
import ProfilePage from '../pages/ProfilePage';
import Commons from '../pages/Commons';

describe('Add and Delete Book Test Cases', () => {
  const loginPage = new LoginPage();
  const profilePage = new ProfilePage();
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

  it('Test Case 1: Verify the row number changes successfully', () => {
    commons.verifyMainHeaderText('Profile');
    profilePage.changeAndVerifyRowNumber('10');
    profilePage.changeAndVerifyRowNumber('20');
    profilePage.changeAndVerifyRowNumber('25');
    profilePage.changeAndVerifyRowNumber('50');
    profilePage.changeAndVerifyRowNumber('100');
    profilePage.changeAndVerifyRowNumber('5');


  });


});    