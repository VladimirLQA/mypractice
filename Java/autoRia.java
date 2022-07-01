import org.junit.Assert;
import org.junit.Test;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.support.ui.Select;


public class autoRia {
    By serchButton = By.xpath("//button[@type='submit']");
    By inputFieldBrand = By.xpath("//input[@id='brandTooltipBrandAutocompleteInput-brand']");
    By inputFieldModel = By.xpath("//input[@id='brandTooltipBrandAutocompleteInput-model']");
    By inputFieldRegion = By.xpath("//label[@for='brandTooltipBrandAutocompleteInput-region']");
    By selectYearFrom = By.xpath("//select[@id='yearFrom']");
    By selectYearTo = By.xpath("//select[@id='yearTo']");
    By inputPriceFrom = By.xpath("//input[@id='priceFrom']");
    By inputPriceTo = By.xpath("//input[@id='priceTo']");
    By offerNumber = By.xpath("//div[text()='0 пропозицій по Вашому запиту']");

    @Test
    public void openSite () throws InterruptedException {
        System.setProperty("webdriver.chrome.driver", "src/main/resources/chromedriver.exe");
        WebDriver driver = new ChromeDriver();

        driver.navigate().to("https://auto.ria.com/uk/");
        driver.manage().window().maximize();

        driver.findElement(inputFieldBrand).sendKeys("bmw");
        Thread.sleep(1000);
        driver.findElement(By.xpath("//li[@data-value='9']")).click();

        driver.findElement(inputFieldModel).sendKeys("320");
        Thread.sleep(1000);

        driver.findElement(By.xpath("//li[@data-value='31611']")).click();
        Thread.sleep(1000);

        driver.findElement(inputFieldRegion).click();
        driver.findElement(By.xpath("//a[text()='Київ']")).click();

        WebElement yearFrom = driver.findElement(selectYearFrom);
        Select ddownFrom = new Select(yearFrom);
        ddownFrom.selectByValue("2015");

        WebElement yearTo = driver.findElement(selectYearTo);
        Select ddownTo = new Select(yearTo);
        ddownTo.selectByValue("2021");

        driver.findElement(inputPriceFrom).sendKeys("50000");

        driver.findElement(inputPriceTo).sendKeys("100000");

        driver.findElement(serchButton).click();
        Thread.sleep(1000);

        Assert.assertEquals(driver.findElement(offerNumber), driver.findElement(offerNumber));

        driver.close();
    }
}
