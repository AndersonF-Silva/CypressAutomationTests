Feature: Home page - Product tabs

  As a visitor
  I want to switch between the product tabs on the home page
  So that I can browse New products, Sales feature and Featured products

  Background:
    Given I visit the home page

  @CTU011
  Scenario: Validate click on the "New products" tab
    When I click on the "New products" tab
    Then the "New products" tab should become active
    And the "New products" content should be visible

  @CTU012
  Scenario: Validate click on the "Sales feature" tab
    When I click on the "Sales feature" tab
    Then the "Sales feature" tab should become active
    And the "Sales feature" content should be visible

  @CTU013
  Scenario: Validate click on the "Featured products" tab
    When I click on the "Featured products" tab
    Then the "Featured products" tab should become active
    And the "Featured products" content should be visible