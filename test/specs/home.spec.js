//Practice E-Commerce Site – Automation Bro
import homePage from "../pages/home.page";


describe("Home", () => {

  beforeEach(async () => {
    //open URL
    await homePage.open();
  });
  
    it("Open URL & assert Title", async () => {

      // Assert Title
      await expect(browser).toHaveTitle("Practice E-Commerce Site – Automation Bro");
    });

    it('Click on get started button & assert the url', async () => {
        await homePage.getStartedBtn.click();
        await expect(browser).toHaveUrlContaining('get-started');
    })

    it('Find heading element & assert the text', async() => {
        const headingEl = await $(".elementor-widget-container h1");
        const headingText = await headingEl.getText();
        await expect(headingText).toEqual("Think different. Make different.");
        await expect(headingEl).toHaveText("Think different. Make different.");
	console.log('check github webhook')
    })
  });
