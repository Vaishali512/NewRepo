$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("test.feature");
formatter.feature({
  "line": 1,
  "name": "Passion Tea Company",
  "description": "",
  "id": "passion-tea-company",
  "keyword": "Feature"
});
formatter.before({
  "duration": 5332199197,
  "status": "passed"
});
formatter.scenario({
  "line": 4,
  "name": "User Send an email to get some info",
  "description": "",
  "id": "passion-tea-company;user-send-an-email-to-get-some-info",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 3,
      "name": "@angtest"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "User navigates to \"https://angularjs.org/\"",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "User enters \"Venkatraman\" in \"angname\" field",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "User enters \"Venkatraman\" in \"Add\" field",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "User clicks \"buildcb\" button",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "User enters \"test\" in \"Search\" field",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "User clicks \"Learn\" button",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "User clicks \"Tutorial\" button",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "https://angularjs.org/",
      "offset": 19
    }
  ],
  "location": "GenericSteps.user_navigates_to(String)"
});
formatter.result({
  "duration": 22905206521,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Venkatraman",
      "offset": 13
    },
    {
      "val": "angname",
      "offset": 30
    }
  ],
  "location": "GenericSteps.user_enters_in_field(String,String)"
});
formatter.result({
  "duration": 1197793974,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Venkatraman",
      "offset": 13
    },
    {
      "val": "Add",
      "offset": 30
    }
  ],
  "location": "GenericSteps.user_enters_in_field(String,String)"
});
formatter.result({
  "duration": 1129630803,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "buildcb",
      "offset": 13
    }
  ],
  "location": "GenericSteps.user_clicks_button(String)"
});
formatter.result({
  "duration": 4096309183,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "test",
      "offset": 13
    },
    {
      "val": "Search",
      "offset": 23
    }
  ],
  "location": "GenericSteps.user_enters_in_field(String,String)"
});
formatter.result({
  "duration": 88096131,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"/html/body/header/nav/div/div/form/input[1]\"}\n  (Session info: chrome\u003d56.0.2924.87)\n  (Driver info: chromedriver\u003d2.25.426923 (0390b88869384d6eb0d5d09729679f934aab9eed),platform\u003dWindows NT 10.0.14393 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 86 milliseconds\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00272.44.0\u0027, revision: \u002776d78cf323ce037c5f92db6c1bba601c2ac43ad8\u0027, time: \u00272014-10-23 13:11:40\u0027\nSystem info: host: \u0027EPINHYDW1275\u0027, ip: \u002710.71.12.165\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_101\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities [{applicationCacheEnabled\u003dfalse, rotatable\u003dfalse, mobileEmulationEnabled\u003dfalse, networkConnectionEnabled\u003dfalse, chrome\u003d{chromedriverVersion\u003d2.25.426923 (0390b88869384d6eb0d5d09729679f934aab9eed), userDataDir\u003dC:\\Users\\VAISHA~1\\AppData\\Local\\Temp\\scoped_dir13368_14287}, takesHeapSnapshot\u003dtrue, pageLoadStrategy\u003dnormal, databaseEnabled\u003dfalse, handlesAlerts\u003dtrue, hasTouchScreen\u003dfalse, version\u003d56.0.2924.87, platform\u003dXP, browserConnectionEnabled\u003dfalse, nativeEvents\u003dtrue, acceptSslCerts\u003dtrue, locationContextEnabled\u003dtrue, webStorageEnabled\u003dtrue, browserName\u003dchrome, takesScreenshot\u003dtrue, javascriptEnabled\u003dtrue, cssSelectorsEnabled\u003dtrue}]\nSession ID: 55af2a29692d72716f395d112e49f564\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:204)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:156)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:599)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:352)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:449)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:357)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:344)\r\n\tat step_Definition.GenericSteps.user_enters_in_field(GenericSteps.java:43)\r\n\tat ✽.And User enters \"test\" in \"Search\" field(test.feature:10)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "Learn",
      "offset": 13
    }
  ],
  "location": "GenericSteps.user_clicks_button(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Tutorial",
      "offset": 13
    }
  ],
  "location": "GenericSteps.user_clicks_button(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.write("Current Page URL is https://angularjs.org/ -  FAILED");
formatter.embedding("image/png", "embedded0.png");
formatter.after({
  "duration": 3742641097,
  "status": "passed"
});
});