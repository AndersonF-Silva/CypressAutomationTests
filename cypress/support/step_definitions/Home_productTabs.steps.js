const { When, Then } = require("@badeball/cypress-cucumber-preprocessor")
const ProductTabs = require("../pageObjects/Home_ProductTabsComponent")

When("I click on the {string} tab", (tabName) => {
    ProductTabs.clickTab(tabName)
})

Then("the {string} tab should become active", (tabName) => {
    ProductTabs.getTabListItem(tabName).should("have.class", "active")
    ProductTabs.getTabLink(tabName).should("have.class", "active")
})

Then("the {string} content should be visible", (tabName) => {
    ProductTabs.getContentBlock(tabName).should("be.visible")
})