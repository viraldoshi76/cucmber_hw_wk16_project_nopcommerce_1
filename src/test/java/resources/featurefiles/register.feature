Feature: Register Test
  As a User I want to register into Nopcommerce Website

  @Smoke
  Scenario: User should navigate to register page successfully
    Given I am on Homepage
    When I click on register link
    Then I should navigate to register Page successfully

  @Sanity
  Scenario: User should register successfully
    Given I am on Homepage
    When I click on register link
    And I select any one radio button on gender label
    And I enter firstname "rocky"
    And I enter lastname "balboa"
    And I enter email in emailfield "rocky@gmail.com"
    And I enter password in passwordfield "rocky1234"
    And I enter confirmpassword "rocky1234"
    And I click on register button
    Then I should register successfully

  @Regression
  Scenario Outline: : User should not register with invalid credentials
    Given I am on Homepage
    When I click on register link
    And I select any one radio button on gender label
    And I enter firstname "<firstName>"
    And I enter lastname "<lastName>"
    And I enter email in emailfield "<email>"
    And I enter password in passwordfield "<password>"
    And I enter confirmpassword "<confirmPassword>"
    And I click on register button
    Then Error Message should be displayed "<errorMessage>"
    Examples:
    |firstName | lastName | email | password | confirmPassword |errorMessage |
    |           |carlton  | rak@gmail.com| uiu5251 | uiu5251   |First name is required.|
    


