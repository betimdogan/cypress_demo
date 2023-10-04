import LoginPage from '../pages/LoginPage';
import Commons from '../pages/Commons';

describe('Login Test Cases', () => {
  const loginPage = new LoginPage();
  const commons = new Commons();
  let users;

  Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
  })


  beforeEach(() => {
    cy.fixture('users.json').then((loadedUsers) => {
      users = loadedUsers;  // Assign the loaded users data to the variable
    });
    commons.openLoginPage();
  });

  it('Test Case 1: Verify successful login with correct username and password', () => {
    if (!users) {
      throw new Error('Users data not loaded.');
    }

    const { username, password } = users.validUser;
    commons.verifyMainHeaderText('Login');
    loginPage.enterUsername(username);
    loginPage.enterPassword(password);
    loginPage.clickLoginButton();
    loginPage.verifyUserNameText('betim')
  });

  it('Test Case 2: Verify user cannot login with incorrect username', () => {
    if (!users) {
      throw new Error('Users data not loaded.');
    }

    const { username, password } = users.incorrectUsername;
    commons.verifyMainHeaderText('Login');
    loginPage.enterUsername(username);
    loginPage.enterPassword(password);
    loginPage.clickLoginButton();
    loginPage.verifyErrorMessage('Invalid username or password!')

  });

  it('Test Case 3: Verify user cannot login with incorrect password', () => {
    if (!users) {
      throw new Error('Users data not loaded.');
    }

    const { username, password } = users.incorrectPassword;
    commons.verifyMainHeaderText('Login');
    loginPage.enterUsername(username);
    loginPage.enterPassword(password);
    loginPage.clickLoginButton();
    loginPage.verifyErrorMessage('Invalid username or password!')

  });

  it('Test Case 4: Verify user cannot login with empty username', () => {
    if (!users) {
      throw new Error('Users data not loaded.');
    }

    const { username, password } = users.emptyUsername;
    commons.verifyMainHeaderText('Login');
    loginPage.enterPassword(password);
    loginPage.clickLoginButton();
    loginPage.verifyEmptyUsernameError();

  });

  it('Test Case 5: Verify user cannot login with empty password', () => {
    if (!users) {
      throw new Error('Users data not loaded.');
    }

    const { username, password } = users.emptyPassword;
    commons.verifyMainHeaderText('Login');
    loginPage.enterUsername(username);
    loginPage.clickLoginButton();
    loginPage.verifyEmptyPasswordError();

  });

}); 