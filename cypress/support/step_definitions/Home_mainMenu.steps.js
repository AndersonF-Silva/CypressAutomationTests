const { When, Then } = require("@badeball/cypress-cucumber-preprocessor")
const MainMenu = require("../pageObjects/Home_MainMenuComponent")

When("I click on the {string} menu", (menuName) => {
    MainMenu.clickMenuItem(menuName)
})

Then("I should be redirected to the {string} page", (menuName) => {
    cy.location("pathname").should("include", MainMenu.getExpectedPath(menuName))
})