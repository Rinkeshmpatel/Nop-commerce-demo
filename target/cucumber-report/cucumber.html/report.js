$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Computerpage.feature");
formatter.feature({
  "line": 1,
  "name": "Computer Page",
  "description": "",
  "id": "computer-page",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 3,
  "name": "verify user should navigate to computer page successfully",
  "description": "",
  "id": "computer-page;verify-user-should-navigate-to-computer-page-successfully",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 4,
  "name": "I click on computer tab \"Computer\"",
  "keyword": "When "
});
formatter.step({
  "line": 5,
  "name": "I navigated computer page successfully",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.scenario({
  "line": 8,
  "name": "verify user should navigate to Desktop page successfully",
  "description": "",
  "id": "computer-page;verify-user-should-navigate-to-desktop-page-successfully",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 9,
  "name": "I click on computer tab \"Computer\"",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "I click on desktop link \"Desktops\"",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "I navigate to desktop page successfully",
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.scenarioOutline({
  "line": 14,
  "name": "verify user should build their own computer",
  "description": "",
  "id": "computer-page;verify-user-should-build-their-own-computer",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 15,
  "name": "I click on computer tab \"Computer\"",
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "I click on desktop link \"Desktops\"",
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "I click on build your own computer \"Build your own computer\"",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I select processor \"\u003cprocessor\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "I select ram \"\u003cram\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "I select Hard disk \"\u003chdd\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "I select Operating system \"\u003cos\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "I select software \"\u003csoftware\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "I click on add to cart tab",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "my built product added to cart",
  "keyword": "Then "
});
formatter.examples({
  "line": 26,
  "name": "",
  "description": "",
  "id": "computer-page;verify-user-should-build-their-own-computer;",
  "rows": [
    {
      "cells": [
        "processor",
        "ram",
        "hdd",
        "os",
        "software"
      ],
      "line": 27,
      "id": "computer-page;verify-user-should-build-their-own-computer;;1"
    },
    {
      "cells": [
        "2.2 GHz Intel Pentium Dual-Core E2200",
        "2 GB",
        "320 GB",
        "Vista Home [+$50.00]",
        "Microsoft Office [+$50.00]"
      ],
      "line": 28,
      "id": "computer-page;verify-user-should-build-their-own-computer;;2"
    },
    {
      "cells": [
        "2.5 GHz Intel Pentium Dual-Core E2200 [+$15.00]",
        "4GB [+$20.00]",
        "400 GB [+$100.00]",
        "Vista Premium [+$60.00]",
        "Acrobat Reader [+$10.00]"
      ],
      "line": 29,
      "id": "computer-page;verify-user-should-build-their-own-computer;;3"
    },
    {
      "cells": [
        "2.5 GHz Intel Pentium Dual-Core E2200 [+$15.00]",
        "8GB [+$60.00]",
        "320 GB",
        "Vista Home [+$50.00]",
        "Total Commander [+$5.00]"
      ],
      "line": 30,
      "id": "computer-page;verify-user-should-build-their-own-computer;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 28,
  "name": "verify user should build their own computer",
  "description": "",
  "id": "computer-page;verify-user-should-build-their-own-computer;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 15,
  "name": "I click on computer tab \"Computer\"",
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "I click on desktop link \"Desktops\"",
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "I click on build your own computer \"Build your own computer\"",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I select processor \"2.2 GHz Intel Pentium Dual-Core E2200\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "I select ram \"2 GB\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "I select Hard disk \"320 GB\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "I select Operating system \"Vista Home [+$50.00]\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "I select software \"Microsoft Office [+$50.00]\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "I click on add to cart tab",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "my built product added to cart",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.scenario({
  "line": 29,
  "name": "verify user should build their own computer",
  "description": "",
  "id": "computer-page;verify-user-should-build-their-own-computer;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 15,
  "name": "I click on computer tab \"Computer\"",
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "I click on desktop link \"Desktops\"",
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "I click on build your own computer \"Build your own computer\"",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I select processor \"2.5 GHz Intel Pentium Dual-Core E2200 [+$15.00]\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "I select ram \"4GB [+$20.00]\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "I select Hard disk \"400 GB [+$100.00]\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "I select Operating system \"Vista Premium [+$60.00]\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "I select software \"Acrobat Reader [+$10.00]\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "I click on add to cart tab",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "my built product added to cart",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.scenario({
  "line": 30,
  "name": "verify user should build their own computer",
  "description": "",
  "id": "computer-page;verify-user-should-build-their-own-computer;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 15,
  "name": "I click on computer tab \"Computer\"",
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "I click on desktop link \"Desktops\"",
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "I click on build your own computer \"Build your own computer\"",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I select processor \"2.5 GHz Intel Pentium Dual-Core E2200 [+$15.00]\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "I select ram \"8GB [+$60.00]\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "I select Hard disk \"320 GB\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "I select Operating system \"Vista Home [+$50.00]\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "I select software \"Total Commander [+$5.00]\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "I click on add to cart tab",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "my built product added to cart",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.uri("loginPage.feature");
formatter.feature({
  "line": 1,
  "name": "Login Test",
  "description": "As a User I want to Login on Nopcommerce Website",
  "id": "login-test",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 4,
  "name": "User should Navigate to LoginPage SuccessFully",
  "description": "",
  "id": "login-test;user-should-navigate-to-loginpage-successfully",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "I am on HomePage",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I click on Login link",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I should navigate to login page successfully and see \"Welcome, Please Sign In!\"",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.scenario({
  "line": 10,
  "name": "user should login with Invalid credentials",
  "description": "",
  "id": "login-test;user-should-login-with-invalid-credentials",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 11,
  "name": "I am on HomePage",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "I click on Login link",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "I enter email \"alorduk@gmail.com\"",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I enter password \"z1283456\"",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I can see error message",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.scenario({
  "line": 18,
  "name": "User Should LogIn SuccessFully With ValidCredentials",
  "description": "",
  "id": "login-test;user-should-login-successfully-with-validcredentials",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 19,
  "name": "I am on HomePage",
  "keyword": "Given "
});
formatter.step({
  "line": 20,
  "name": "I click on Login link",
  "keyword": "When "
});
formatter.step({
  "line": 21,
  "name": "I enter email \"Test124@gmail.com\"",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "I enter password \"tEST1234\"",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "I click on login button",
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.scenario({
  "line": 26,
  "name": "User Should LogOut SuccessFully",
  "description": "",
  "id": "login-test;user-should-logout-successfully",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 27,
  "name": "I am on HomePage",
  "keyword": "Given "
});
formatter.step({
  "line": 28,
  "name": "I click on Login link",
  "keyword": "When "
});
formatter.step({
  "line": 29,
  "name": "I enter email \"Test124@gmail.com\"",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "I enter password \"tEST1234\"",
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "I click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "I verify that Login Link is display",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.uri("register.feature");
formatter.feature({
  "line": 1,
  "name": "Register Page Functionality",
  "description": "",
  "id": "register-page-functionality",
  "keyword": "Feature"
});
formatter.background({
  "line": 3,
  "name": "I am on home page",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.scenario({
  "line": 6,
  "name": "verify user should navigate to register page successfully",
  "description": "",
  "id": "register-page-functionality;verify-user-should-navigate-to-register-page-successfully",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 7,
  "name": "I click on register link",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I navigated to register text page",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.background({
  "line": 3,
  "name": "I am on home page",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.scenario({
  "line": 11,
  "name": "verify that firstname lastname email password confirm password are required",
  "description": "",
  "id": "register-page-functionality;verify-that-firstname-lastname-email-password-confirm-password-are-required",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 12,
  "name": "I click on register link",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "I click on register button",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "I got an error messageFirst name is required",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I got an error message Last name is required",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I got an error message email is required",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I got an error message password is required",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I got an error message confirm password is required",
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.scenarioOutline({
  "line": 21,
  "name": "verify user can register successfully",
  "description": "",
  "id": "register-page-functionality;verify-user-can-register-successfully",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 22,
  "name": "I click on register link",
  "keyword": "When "
});
formatter.step({
  "line": 23,
  "name": "I select gender \"\u003cgen\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "I enter firstname \"\u003cname\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "I enter lastname \"\u003clastname\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "I enter email \"\u003cemail\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "I enter password  \"\u003cpass\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "I enter confirm pass  \"\u003ccpass\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "I click on register button",
  "keyword": "Then "
});
formatter.step({
  "line": 30,
  "name": "I can see a message registration complete",
  "keyword": "And "
});
formatter.examples({
  "line": 32,
  "name": "",
  "description": "",
  "id": "register-page-functionality;verify-user-can-register-successfully;",
  "rows": [
    {
      "cells": [
        "gen",
        "name",
        "lastname",
        "email",
        "pass",
        "cpass"
      ],
      "line": 33,
      "id": "register-page-functionality;verify-user-can-register-successfully;;1"
    },
    {
      "cells": [
        "Male",
        "Rinkesh",
        "Patel",
        "abc123@gmail.com",
        "xyz123",
        "xyz123"
      ],
      "line": 34,
      "id": "register-page-functionality;verify-user-can-register-successfully;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.background({
  "line": 3,
  "name": "I am on home page",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.scenario({
  "line": 34,
  "name": "verify user can register successfully",
  "description": "",
  "id": "register-page-functionality;verify-user-can-register-successfully;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 22,
  "name": "I click on register link",
  "keyword": "When "
});
formatter.step({
  "line": 23,
  "name": "I select gender \"Male\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "I enter firstname \"Rinkesh\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "I enter lastname \"Patel\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "I enter email \"abc123@gmail.com\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "I enter password  \"xyz123\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "I enter confirm pass  \"xyz123\"",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "I click on register button",
  "keyword": "Then "
});
formatter.step({
  "line": 30,
  "name": "I can see a message registration complete",
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
});