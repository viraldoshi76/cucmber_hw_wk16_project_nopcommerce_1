package com.nopcommerce.demo.cucumber.stepdefs;

import com.nopcommerce.demo.pages.ComputerPage;
import com.nopcommerce.demo.pages.DesktopsPage;
import com.nopcommerce.demo.pages.HomePage;
import com.nopcommerce.demo.pages.NotebooksPage;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.junit.Assert;

public class ComputerStepdefs {
    @When("^I click on computer tab$")
    public void iClickOnComputerTab() {
        new HomePage().clickOnComputerLink();
    }

    @Then("^I should navigate to computer page successfully$")
    public void iShouldNavigateToComputerPageSuccessfully() {
        Assert.assertEquals("Computers",new ComputerPage().navigateToComputerPageSuccessfully());
    }

    @When("^I hoover on computer tab$")
    public void iHooverOnComputerTab() {
        new HomePage().hooverOnComputerLink();
    }

    @And("^I click on Desktop Link$")
    public void iClickOnDesktopLink() {
        new HomePage().hooverAndClickOnDesktopLink();
    }

    @Then("^I should navigate to desktop page successfully$")
    public void iShouldNavigateToDesktopPageSuccessfully() {
        Assert.assertEquals("Desktops",new DesktopsPage().getTextFromDesktopPageTitle());
    }

    @And("^I click on Notebooks link$")
    public void iClickOnNotebooksLink() {
        new HomePage().hooverAndClickOnNotebooksLink();
    }

    @Then("^I should navigate to notebooks page successfully$")
    public void iShouldNavigateToNotebooksPageSuccessfully() {
        Assert.assertEquals("Notebooks", new NotebooksPage().navigateToNotebooksPageSuccessfully());
    }
}
