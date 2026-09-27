const { Given, Then } = require("@badeball/cypress-cucumber-preprocessor")
const HomePage = require("../pageObjects/HomePage")

Given("I visit the home page", () => {
    HomePage.visit()
})

Then("the page body should be visible", () => {
    cy.get("body").should("be.visible")
})

Then("the store logo should be visible", () => {
    HomePage.getLogo()
        .should("be.visible")
        .and("have.attr", "src")
        .and("include", "watchlogo.png")
})

Then("the header should display the following links:", (dataTable) => {
    dataTable.raw().flat().forEach((linkText) => {
        HomePage.getLink(linkText).should("be.visible")
    })
})

Then("the main menu should display the following categories:", (dataTable) => {
    dataTable.raw().flat().forEach((category) => {
        HomePage.getMenuItem(category).should("be.visible")
    })
})

Then("the search input should be visible", () => {
    HomePage.getSearchInput().should("be.visible")
})