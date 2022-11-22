
Feature: Create account in Magento Software Testing Website

  Scenario Outline: TC-001 Create New Account

    Given I am on the home page
    When I click on create an account
    Then I enter details "<FirstName>" "<LastName>" "<Email>" "<Password>" and "<PasswordConfirmation>"
    Then Verify User is in home page

    Examples:
      | FirstName | LastName | Email                | Password | PasswordConfirmation |
      | arathy    | vijay    | arathytesting@gmail.com | Pass@123 | Pass@123             |