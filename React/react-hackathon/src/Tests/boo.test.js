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
        const dagger = await driver.wait(until.elementLocated(By.css("#root > div > div.row.row-cols-3.g-4 > div:nth-child(4) > div > button:nth-child(5)")));
        await dagger.click();
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

describe("ex3 tests", function () {
    this.timeout(90_000); 
  
  
//     it("should find Bluey", async () => {
//       const driver = await new Builder().forBrowser("chrome").build();
//       try {
//         await driver.get("http://localhost:3000/testing/ex3");
//         const SearchInput= await driver.findElement(By.id("filmTitle"));
//         await SearchInput.sendKeys("Bluey");
//         await (await driver.findElement(By.css("#root > div > div.container > form > div > div > button"))).click();
//         const result = await driver.wait(until.elementLocated(By.css("#root > div > div.container > div.container > div > div:nth-child(1) > div > div > div")));
//         expect(await result.getText()).to.equal("Bluey");
//         const pic = await driver.findElement(By.css("#root > div > div.container > div.container > div > div:nth-child(1) > div > img"));
//         await pic.click();
//         const newText = await driver.wait(until.elementLocated(By.css("#root > div > div:nth-child(3) > div > div > div")));
//         expect(await newText.getText()).to.equal("Bluey");
//         const redirect = await driver.getCurrentUrl();
//         expect(redirect).to.equal("http://localhost:3000/filmDetails/tt7678620");
//       } finally {
//        await driver.quit();
//       }
//     });
})