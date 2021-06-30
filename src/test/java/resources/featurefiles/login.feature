Feature: Login Test
  As a user I want to login into Nopcommerce website



  @Smoke
  Scenario: User should navigate to login page successfully.
    Given I am on Homepage
    When I click on login Link
    Then I should navigate to login page successfully

  @Sanity
  Scenario: User should login with valid credentials
    Given I am on Homepage
    When I click on login Link
    And I enter email in emailfield "jules@gmail.com" and password in passwordfield "lkjh1234"
    And I click on login button
    Then I should be able to login successfully

  @Regression
  Scenario Outline: Verify the error message with invalid credentials
    Given I am on Homepage
    When I click on login Link
    And I enter email in emailfield "<email>" and password in passwordfield "<password>"
    And I click on login button
    Then I should see the error message "<expectedErrorMessage>"
    Examples:
      | email           | password  | expectedErrorMessage                                                                               |
      | mak@gmail.com   | asdf1234  | Login was unsuccessful. Please correct the errors and try again.|
      | mak1@gmail.com  | asdf12345 | Login was unsuccessful. Please correct the errors and try again.|
      | mak12@gmail.com | asdf12346 | Login was unsuccessful. Please correct the errors and try again.|





