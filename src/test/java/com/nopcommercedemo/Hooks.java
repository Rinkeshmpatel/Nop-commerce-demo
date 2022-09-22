package com.nopcommercedemo;

import com.cucumber.listener.Reporter;
import com.nopcommercedemo.propertyreder.PropertyReader;
import com.nopcommercedemo.utility.Utility;
import cucumber.api.Scenario;
import cucumber.api.java.After;
import cucumber.api.java.Before;

import java.io.IOException;

import static com.nopcommercedemo.drivermanager.ManageDriver.driver;


/**
 * Created by Rinkesh patel
 */
public class Hooks extends Utility {

    @Before
    public void setUp() throws InterruptedException {
        selectBrowser(PropertyReader.getInstance().getProperty("browser"));

    }

    @After
    public void tearDown(Scenario scenario) {
        if (scenario.isFailed()) {
            String screenShotPath = Utility.getScreenshot(driver, scenario.getName().replace(" ", "_"));
            try {
                Reporter.addScreenCaptureFromPath(screenShotPath);
            } catch (IOException e) {
                e.printStackTrace();
            }
        }
        closeBrowser();
    }
}