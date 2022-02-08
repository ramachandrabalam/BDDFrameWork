$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Loginpage.feature");
formatter.feature({
  "line": 1,
  "name": "Verify the login functionality",
  "description": "",
  "id": "verify-the-login-functionality",
  "keyword": "Feature"
});
formatter.before({
  "duration": 2261600,
  "status": "passed"
});
formatter.before({
  "duration": 5373828300,
  "status": "passed"
});
formatter.scenario({
  "line": 3,
  "name": "Verify the login with valid credentials",
  "description": "",
  "id": "verify-the-login-functionality;verify-the-login-with-valid-credentials",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 4,
  "name": "Load the website \"http://practice.automationtesting.in/\"",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "Click on myaccount button",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "Enter username \"rcbalam@gmail.com\"",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "Enter password \"Ram@bvrm534201\"",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "Click on signout",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "http://practice.automationtesting.in/",
      "offset": 18
    }
  ],
  "location": "LoginpageSteps.load_the_website(String)"
});
formatter.result({
  "duration": 5441908400,
  "status": "passed"
});
formatter.match({
  "location": "LoginpageSteps.click_on_myaccount_button()"
});
formatter.result({
  "duration": 1718688400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "rcbalam@gmail.com",
      "offset": 16
    }
  ],
  "location": "LoginpageSteps.enter_username(String)"
});
formatter.result({
  "duration": 483297900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Ram@bvrm534201",
      "offset": 16
    }
  ],
  "location": "LoginpageSteps.enter_password(String)"
});
formatter.result({
  "duration": 185666400,
  "status": "passed"
});
formatter.match({
  "location": "LoginpageSteps.click_on_login_button()"
});
formatter.result({
  "duration": 2130548100,
  "status": "passed"
});
formatter.match({
  "location": "LoginpageSteps.click_on_signout()"
});
formatter.result({
  "duration": 2341840900,
  "status": "passed"
});
formatter.after({
  "duration": 826387800,
  "status": "passed"
});
formatter.uri("MyaccounPage.feature");
formatter.feature({
  "line": 1,
  "name": "Verify the My account page",
  "description": "",
  "id": "verify-the-my-account-page",
  "keyword": "Feature"
});
formatter.before({
  "duration": 482200,
  "status": "passed"
});
formatter.before({
  "duration": 1949765600,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "Load the website \"http://practice.automationtesting.in/\"",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "Click on myaccount button",
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "Enter username \"rcbalam@gmail.com\" and password \"Ram@bvrm534201\"",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "click on login button",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "http://practice.automationtesting.in/",
      "offset": 18
    }
  ],
  "location": "LoginpageSteps.load_the_website(String)"
});
formatter.result({
  "duration": 5109266900,
  "status": "passed"
});
formatter.match({
  "location": "LoginpageSteps.click_on_myaccount_button()"
});
formatter.result({
  "duration": 1600914300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "rcbalam@gmail.com",
      "offset": 16
    },
    {
      "val": "Ram@bvrm534201",
      "offset": 49
    }
  ],
  "location": "MyaccountpageSteps.enter_username_and_password(String,String)"
});
formatter.result({
  "duration": 2983288800,
  "status": "passed"
});
formatter.match({
  "location": "LoginpageSteps.click_on_login_button()"
});
formatter.result({
  "duration": 74066400,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//input[@name\u003d\u0027login\u0027]\"}\n  (Session info: chrome\u003d97.0.4692.99)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027RAMACHANDRA\u0027, ip: \u0027192.168.0.180\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_211\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 97.0.4692.99, chrome: {chromedriverVersion: 97.0.4692.71 (adefa7837d02a..., userDataDir: C:\\Users\\asd\\AppData\\Local\\...}, goog:chromeOptions: {debuggerAddress: localhost:50671}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: 38b5148cf0daa355353d227a19610d4d\n*** Element info: {Using\u003dxpath, value\u003d//input[@name\u003d\u0027login\u0027]}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat com.pageObjects.Loginpage.clickLoginbtn(Loginpage.java:32)\r\n\tat stepDefinitions.LoginpageSteps.click_on_login_button(LoginpageSteps.java:37)\r\n\tat ✽.And click on login button(MyaccounPage.feature:7)\r\n",
  "status": "failed"
});
formatter.scenario({
  "line": 9,
  "name": "Verify the menu list",
  "description": "",
  "id": "verify-the-my-account-page;verify-the-menu-list",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 11,
  "name": "Menu contains the following items",
  "rows": [
    {
      "cells": [
        "Dashboard"
      ],
      "line": 12
    },
    {
      "cells": [
        "Orders"
      ],
      "line": 13
    },
    {
      "cells": [
        "Downloads"
      ],
      "line": 14
    },
    {
      "cells": [
        "Addresses"
      ],
      "line": 15
    },
    {
      "cells": [
        "Addresses"
      ],
      "line": 16
    }
  ],
  "keyword": "When "
});
formatter.step({
  "line": 18,
  "name": "verify the items are 5",
  "keyword": "Then "
});
formatter.match({
  "location": "MyaccountpageSteps.menu_contains_the_following_items(DataTable)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "5",
      "offset": 21
    }
  ],
  "location": "MyaccountpageSteps.verify_the_items_are(int)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 1391439100,
  "status": "passed"
});
});