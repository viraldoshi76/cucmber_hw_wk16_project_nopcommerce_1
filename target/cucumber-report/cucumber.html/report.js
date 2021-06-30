$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/java/resources/featurefiles/register.feature");
formatter.feature({
  "line": 1,
  "name": "Register Test",
  "description": "As a User I want to register into Nopcommerce Website",
  "id": "register-test",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 24,
  "name": ": User should not register with invalid credentials",
  "description": "",
  "id": "register-test;:-user-should-not-register-with-invalid-credentials",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 23,
      "name": "@Smoke"
    }
  ]
});
formatter.step({
  "line": 25,
  "name": "I am on Homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 26,
  "name": "I click on register link",
  "keyword": "When "
});
formatter.step({
  "line": 27,
  "name": "I select any one radio button on gender label",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "I enter firstname \"\u003cfirstName\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "I enter lastname \"\u003clastName\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "I enter email in emailfield \"\u003cemail\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "I enter password in passwordfield \"\u003cpassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "I enter confirmpassword \"\u003cconfirmPassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "I click on register button",
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "Error Message should be displayed \"\u003cerrorMessage\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 35,
  "name": "",
  "description": "",
  "id": "register-test;:-user-should-not-register-with-invalid-credentials;",
  "rows": [
    {
      "cells": [
        "firstName",
        "lastName",
        "email",
        "password",
        "confirmPassword",
        "errorMessage"
      ],
      "line": 36,
      "id": "register-test;:-user-should-not-register-with-invalid-credentials;;1"
    },
    {
      "cells": [
        "",
        "carlton",
        "rak@gmail.com",
        "uiu5251",
        "uiu5251",
        "First name is required."
      ],
      "line": 37,
      "id": "register-test;:-user-should-not-register-with-invalid-credentials;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 10513043500,
  "status": "passed"
});
formatter.scenario({
  "line": 37,
  "name": ": User should not register with invalid credentials",
  "description": "",
  "id": "register-test;:-user-should-not-register-with-invalid-credentials;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 23,
      "name": "@Smoke"
    }
  ]
});
formatter.step({
  "line": 25,
  "name": "I am on Homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 26,
  "name": "I click on register link",
  "keyword": "When "
});
formatter.step({
  "line": 27,
  "name": "I select any one radio button on gender label",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "I enter firstname \"\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "I enter lastname \"carlton\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "I enter email in emailfield \"rak@gmail.com\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "I enter password in passwordfield \"uiu5251\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "I enter confirmpassword \"uiu5251\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "I click on register button",
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "Error Message should be displayed \"First name is required.\"",
  "matchedColumns": [
    5
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepdefs.iAmOnHomepage()"
});
formatter.result({
  "duration": 417872800,
  "status": "passed"
});
formatter.match({
  "location": "RegisterStepdefs.iClickOnRegisterLink()"
});
formatter.result({
  "duration": 1857983600,
  "status": "passed"
});
formatter.match({
  "location": "RegisterStepdefs.iSelectAnyOneRadioButtonOnGenderLabel()"
});
formatter.result({
  "duration": 151250900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 19
    }
  ],
  "location": "RegisterStepdefs.iEnterFirstname(String)"
});
formatter.result({
  "duration": 196982400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "carlton",
      "offset": 18
    }
  ],
  "location": "RegisterStepdefs.iEnterLastname(String)"
});
formatter.result({
  "duration": 222821600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "rak@gmail.com",
      "offset": 29
    }
  ],
  "location": "RegisterStepdefs.iEnterEmailInEmailfield(String)"
});
formatter.result({
  "duration": 243510100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "uiu5251",
      "offset": 35
    }
  ],
  "location": "RegisterStepdefs.iEnterPasswordInPasswordfield(String)"
});
formatter.result({
  "duration": 227919000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "uiu5251",
      "offset": 25
    }
  ],
  "location": "RegisterStepdefs.iEnterConfirmpassword(String)"
});
formatter.result({
  "duration": 1015583600,
  "status": "passed"
});
formatter.match({
  "location": "RegisterStepdefs.iClickOnRegisterButton()"
});
formatter.result({
  "duration": 178299700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "First name is required.",
      "offset": 35
    }
  ],
  "location": "RegisterStepdefs.errorMessageShouldBeDisplayed(String)"
});
formatter.result({
  "duration": 88261900,
  "status": "passed"
});
formatter.after({
  "duration": 1079335700,
  "status": "passed"
});
});