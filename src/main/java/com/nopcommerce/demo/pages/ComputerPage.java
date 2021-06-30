package com.nopcommerce.demo.pages;

import com.nopcommerce.demo.utility.Utility;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

public class ComputerPage extends Utility {

    private static final Logger log = LogManager.getLogger(ComputerPage.class.getName());

    @FindBy(xpath = "//div[@class='page-title']")
    WebElement computerText;

    public String navigateToComputerPageSuccessfully(){
        log.info("Getting computer Text"+ computerText.toString());
        return getTextFromElement(computerText);
    }

}
