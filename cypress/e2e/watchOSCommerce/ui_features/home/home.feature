Feature: Home page

  As a visitor
  I want to see the main elements of the home page
  So that I can trust the store is working correctly

  Background:
    Given I visit the home page

  Scenario: Home page loads successfully
    Then the page body should be visible

  Scenario: Store logo is displayed
    Then the store logo should be visible

  Scenario: Header links are displayed
    Then the header should display the following links:
      | Home page     |
      | Contact Us    |
      | My Account    |
      | Shopping Cart |

  Scenario: Main category menu is displayed
    Then the main menu should display the following categories:
      | For her           |
      | For him            |
      | For all            |
      | New products       |
      | Featured products  |
      | All Products       |

  Scenario: Search field is displayed
    Then the search input should be visible