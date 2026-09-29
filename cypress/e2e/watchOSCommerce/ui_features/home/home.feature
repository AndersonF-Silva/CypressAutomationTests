Feature: Home page

  As a visitor
  I want to see the main elements of the home page
  So that I can trust the store is working correctly

  Background:
    Given I visit the home page

  @CTU001
  Scenario: Home page loads successfully
    Then the page body should be visible

  @CTU002
  Scenario: Store logo is displayed
    Then the store logo should be visible

  @CTU003
  Scenario: Header links are displayed
    Then the header should display the following links:
      | Home page     |
      | Contact Us    |
      | My Account    |
      | Shopping Cart |

  @CTU004
  Scenario: Main category menu is displayed
    Then the main menu should display the following categories:
      | For her           |
      | For him            |
      | For all            |
      | New products       |
      | Featured products  |
      | All Products       |

  @CTU005
  Scenario: Search field is displayed
    Then the search input should be visible