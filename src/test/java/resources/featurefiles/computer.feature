Feature: Computer Test
  As a User I want to go to computer page from homepage

  @smoke
  Scenario: User should navigate to computer page successfully
    Given I am on Homepage
    When I click on computer tab
    Then I should navigate to computer page successfully

  @Sanity
  Scenario: User should navigate to Desktop page successfully
    Given I am on Homepage
    When I hoover on computer tab
    And I click on Desktop Link
    Then I should navigate to desktop page successfully

  @Regression
  Scenario: User should navigate to Notebooks page successfully
    Given I am on Homepage
    When I hoover on computer tab
    And I click on Notebooks link
    Then I should navigate to notebooks page successfully

