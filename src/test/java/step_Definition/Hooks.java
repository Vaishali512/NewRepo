package step_Definition;

import java.net.MalformedURLException;
import java.util.HashMap;
import java.util.List;

import org.openqa.selenium.By;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebDriverException;
import org.openqa.selenium.chrome.ChromeDriver;
import cucumber.api.StepDefinitionReporter;
import cucumber.api.Scenario;
import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.runtime.StopWatch;

public class Hooks {

	public List<HashMap<String, String>> datamap;
	StepDefinitionReporter stepdefination;
	public static WebDriver driver;
	Scenario scenario;

	@Before
	public void openBrowser(Scenario scenario) throws MalformedURLException, InterruptedException {

		// logger.info("Opening Browser");

		System.setProperty("webdriver.chrome.driver",
				"C:\\Users\\Vaishali_Sharma\\workspace\\CM\\lib\\chromedriver.exe");
		driver = new ChromeDriver();
		driver.manage().getCookies();
		driver.manage().window().maximize();
		
		
		
	}

	// Embed a screenshot in test report

	@SuppressWarnings("deprecation")
	@After
	public void embedScreenshot(Scenario scenario) {
		

		try {

			String status = (scenario.getStatus());
			scenario.write("Current Page URL is " + driver.getCurrentUrl() + " - " + " " + status.toUpperCase());
			byte[] screenshot = ((TakesScreenshot) driver).getScreenshotAs(OutputType.BYTES);
			scenario.embed(screenshot, "image/png");
		} catch (WebDriverException somePlatformsDontSupportScreenshots) {
			System.err.println(somePlatformsDontSupportScreenshots.getMessage());
		} finally {

			driver.close();

			driver.quit();
		}
	}
}