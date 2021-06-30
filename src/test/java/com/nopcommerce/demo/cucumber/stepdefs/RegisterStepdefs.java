package com.nopcommerce.demo.cucumber.stepdefs;

import com.nopcommerce.demo.pages.HomePage;
import com.nopcommerce.demo.pages.RegisterPage;
import cucumber.api.PendingException;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.junit.Assert;

public class RegisterStepdefs {
    @When("^I click on register link$")
    public void iClickOnRegisterLink() {
        new HomePage().clickOnRegisterLink();
    }

    @Then("^I should navigate to register Page successfully$")
    public void iShouldNavigateToReisterPageSuccessfully() {
        Assert.assertEquals("Register", new RegisterPage().getActualRegistrationText());
    }

    @And("^I select any one radio button on gender label$")
    public void iSelectAnyOneRadioButtonOnGenderLabel() {
        new RegisterPage().clickOnGenderMaleRadioButton();
    }

    @And("^I enter firstname \"([^\"]*)\"$")
    public void iEnterFirstname(String firstName)  {
        new RegisterPage().sendTextToFirstNameField(firstName);
    }

    @And("^I enter lastname \"([^\"]*)\"$")
    public void iEnterLastname(String lastName)  {
        new RegisterPage().sendTextToLastNameField(lastName);
    }

    @And("^I enter email in emailfield \"([^\"]*)\"$")
    public void iEnterEmailInEmailfield(String registerPageEmail)  {
        new RegisterPage().sendTextToEmailField(registerPageEmail);
    }

    @And("^I enter password in passwordfield \"([^\"]*)\"$")
    public void iEnterPasswordInPasswordfield(String registerPagePassword)  {
        new RegisterPage().sendTextToPasswordField(registerPagePassword);
    }

    @And("^I enter confirmpassword \"([^\"]*)\"$")
    public void iEnterConfirmpassword(String registerPageConfirmPassword)  {
        new RegisterPage().sendTextToConfirmPasswordField(registerPageConfirmPassword);
    }

    @And("^I click on register button$")
    public void iClickOnRegisterButton() {
        new RegisterPage().clickingOnRegisterButton();
    }

    @Then("^I should register successfully$")
    public void iShouldRegisterSuccessfully() {
        Assert.assertEquals("Your registration completed",new RegisterPage().getActualRegisterCompletionMessage());
    }


    @Then("^Error Message should be displayed \"([^\"]*)\"$")
    public void errorMessageShouldBeDisplayed(String errorMessage) {
        Assert.assertTrue(new RegisterPage().actualTextOfEmptyFieldMessage().contains(errorMessage));

    }
}
