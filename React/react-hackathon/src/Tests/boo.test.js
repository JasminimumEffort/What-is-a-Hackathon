require("chromedriver"); // You WILL need to update chrome on the LoD
const { Builder, By, Key, until, Browser } = require("selenium-webdriver");
//Builder - what builds our browser
//By - how we select the element to click or input values into
//Key - keyboard functionality
const { expect } = require("chai");

describe("create test", function () {
  this.timeout(90_000); 

  it("should create an album", async () => {
    const driver = await new Builder().forBrowser("chrome").build();
    try {
      await driver.get("http://localhost:3000/");
      const searchName = await driver.findElement(By.id("AlbumName"));
      await searchName.sendKeys("Costello Music");
      const searchArtist = await driver.findElement(By.id("AlbumArtist"));
      await searchArtist.sendKeys("The Fratellis");
      const searchLabel = await driver.findElement(By.id("AlbumLabel"));
      await searchLabel.sendKeys("Fallout Records");
      const searchTotal = await driver.findElement(By.id("AlbumTrackTotal"));
      await searchTotal.sendKeys("13");
      const searchB = await driver.findElement(By.css("#root > div > div:nth-child(1) > form > div > button > input"));
      await searchB.click();
      const result = await driver.wait(until.elementLocated(By.css("#root > div > div.row.row-cols-3.g-4 > div:nth-child(4) > div > p:nth-child(2)")));
      expect(await result.getText()).to.equal("Artist: The Fratellis");
    } finally {
     await driver.quit();
    }
  });
});
//   

  describe("Update Test", function () {
    this.timeout(90_000); 
  
  
    it("should find the previously made album and update it with a new total", async () => {
      const driver = await new Builder().forBrowser("chrome").build();
      try {
        await driver.get("http://localhost:3000/");
        await driver.wait(until.elementLocated(By.css("#root > div > div.row.row-cols-3.g-4 > div:nth-child(4) > div > button:nth-child(5)"))).click(); //this is the problem 
        const modal = await driver.wait(until.elementLocated(By.css("body > div.fade.modal.show > div > div")));
        const totalTrack = await driver.findElement(By.id("AlbumTrackTotal"));
        await totalTrack.sendKeys("18")
        const submit = await driver.findElement(By.id("SaveEditButton"));
        await submit.click();
        const updateBox = driver.wait(until.elementLocated(By.css("#root > div > div.row.row-cols-3.g-4 > div:nth-child(4) > div > p:nth-child(3)")))
        expect(await updateBox.getText()).to.equal("18");
      } finally {
       await driver.quit();
      }
    });
})

describe("Delete Tests", function () {
    this.timeout(90_000); 
  
  
    it("should find the aforementioned album and yeet it", async () => {
      const driver = await new Builder().forBrowser("chrome").build();
      try {
        await driver.get("http://localhost:3000/");
        const deleteButton = await driver.findElement(By.css("#root > div > div.row.row-cols-3.g-4 > div:nth-child(4) > div > button:nth-child(6)"));
        await deleteButton.click();
        const result = await driver.findElement(By.css("#root > div > div.row.row-cols-3.g-4"));
        const count = await result.childElementCount
        expect(count).to.equal("1");
      } finally {
       await driver.quit();
      }
    });
})