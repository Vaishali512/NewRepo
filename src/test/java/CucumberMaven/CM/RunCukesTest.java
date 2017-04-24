package CucumberMaven.CM;

import org.junit.runner.RunWith;
import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(features = "Features", glue = { "step_Definition" }, plugin = { "pretty",
		"html:Report", "json:Report/cucumber.json",
		"junit:Report/cucumber.xml" },tags = {"@angtest"}, format = { "json:Report/cucumber.json" })



public class RunCukesTest {

}