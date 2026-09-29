Feature: Home page - Main menu

  As a visitor
  I want to use the main menu
  So that I can navigate to the store categories

  Background:
    Given I visit the home page

  @CTU005
  Scenario: Validate click on the "For her" menu
    When I click on the "For her" menu
    Then I should be redirected to the "For her" page

  @CTU006
  Scenario: Validate click on the "For him" menu
    When I click on the "For him" menu
    Then I should be redirected to the "For him" page

  @CTU007
  Scenario: Validate click on the "For all" menu
    When I click on the "For all" menu
    Then I should be redirected to the "For all" page

  @CTU008
  Scenario: Validate click on the "New products" menu
    When I click on the "New products" menu
    Then I should be redirected to the "New products" page

  @CTU009
  Scenario: Validate click on the "Featured products" menu
    When I click on the "Featured products" menu
    Then I should be redirected to the "Featured products" page

  @CTU010
  Scenario: Validate click on the "All Products" menu
    When I click on the "All Products" menu
    Then I should be redirected to the "All Products" page