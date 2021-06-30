package com.nopcommerce.demo.cucumber.stepdefs;

import com.nopcommerce.demo.pages.HomePage;
import com.nopcommerce.demo.pages.LoginPage;
import cucumber.api.PendingException;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.junit.Assert;

public class LoginStepdefs {
    @Given("^I am on Homepage$")
    public void iAmOnHomepage() {
    }

    @When("^I click on login Link$")
    public void iClickOnLoginLink() {
        new HomePage().clickOnLoginLink();
    }

    @Then("^I should navigate to login page successfully$")
    public void iShouldNavigateToLoginPageSuccessfully() {
        Assert.assertEquals("Welcome, Please Sign In!",new LoginPage().getActualText());

    }

    @And("^I enter email in emailfield \"([^\"]*)\" and password in passwordfield \"([^\"]*)\"$")
    public void iEnterEmailInEmailfieldAndPasswordInPasswordfield(String email, String password)  {
       new LoginPage().enterValidEmail(email);
       new LoginPage().entervalidPassword(password);
    }

    @And("^I click on login button$")
    public void iClickOnLoginButton() {
        new LoginPage().clickOnLoginButton();

    }

    @Then("^I should be able to login successfully$")
    public void iShouldBeAbleToLoginSuccessfully() {
        Assert.assertEquals("Log out", new HomePage().logoutTextToVerify());
    }

    @Then("^I should see the error message \"([^\"]*)\"$")
    public void iShouldSeeTheErrorMessage(String expectedErrorMessage)  {
       Assert.assertTrue(new LoginPage().getInvalidMessageActualText().contains(expectedErrorMessage));
    }
}
