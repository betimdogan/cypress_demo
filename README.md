# Book Store Application E2E Tests

This project encompasses end-to-end tests for the "Book Store Application" using Cypress and reporting with Mochawesome. The application is available for testing at [Book Store Application](https://demoqa.com/books).

## Table of Contents

- [Introduction](#introduction)
- [Test Scenarios](#test-scenarios)
- [Running the Tests](#running-the-tests)
  - [Mochawesome Reports](#generating-mochawesome-reports)
  - [Screenshots](#screenshots)


## Introduction

This repository contains end-to-end tests for the "Book Store Application". The tests are organized into different test scenarios to verify various functionalities of the application.

## Test Scenarios

### Login Tests

- **Test Case 1:** Verify successful login with correct username and password
- **Test Case 2:** Verify user cannot login with incorrect username
- **Test Case 3:** Verify user cannot login with incorrect password
- **Test Case 4:** Verify user cannot login with empty username
- **Test Case 5:** Verify user cannot login with empty password
- **Test Case 6:** Verify user can logout successfully

### Search Tests

- **Test Case 1:** User can search a book successfully

### Add and Delete Book Tests

- **Test Case 1:** User can add and delete a book successfully

### Change Row Number on Profile Page Tests

- **Test Case 1:** Verify the row number changes successfully

## Running the Tests

1. **Clone the repository:**

    ```bash
    git clone https://github.com/betimdogan/cypress_demo.git
    cd <repository-directory>
    ```

2. **Install dependencies:**

    ```bash
    npm install
    ```

3. **Run the Cypress tests:**

    ```bash
    npx cypress run --spec "cypress/e2e/*.js"
    ```

### Generating Mochawesome Reports

After running the tests, Mochawesome HTML report will be generated and stored in the `cypress/reports` directory. Screenshots for failed tests will be saved in the `cypress/screenshots` directory.

1. **Run the Cypress tests and generate Mochawesome report:**

    ```bash
    npx cypress run --spec "cypress/e2e/*.js" --reporter mochawesome
    ```

2. **Access the Mochawesome HTML report in `cypress/reports`:**

    ```bash
    cd cypress/reports
    ```

    Open the generated HTML report in a web browser to view the detailed test results.

### Screenshots

Screenshots for failed tests will be saved in the `cypress/screenshots` directory. You can review these screenshots to diagnose test failures.
