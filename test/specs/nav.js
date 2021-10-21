describe('Navigation', () => {
    it('Get the text of all menu', async() => {
        await browser.url('/');

        const expectedLinks = [
            "Home",
            "About",
            "Shop",
            "Blog",
            "Contact",
            "My account"
        ];

        const actualLink = [];
//#primary-menu li[id*=menu]
        const navLinks = await $('#primary-menu').$$("li[id*=menu]"); //6

        for (const link of navLinks){
            actualLink.push(await link.getText());
        }

        //not working
        navLinks.forEach(async (link) => {
            actualLink.push(await link.getText());
        });


    await expect(expectedLinks).toEqual(actualLink);
    });

    it.only('Get the text of all menu', async() => {

        browser.url('/');

        const expectedLinks = [
            "Home",
            "About",
            "Shop",
            "Blog",
            "Contact",
            "My account"
        ];


        await browser.waitUntil(async function() {
            const homeText = await $('#primary-menu li').getText();
            return homeText === "Home"; //True/False
        }, {
            timeout: 5000,
            timeoutMsg: 'sorry'
        })
        const actualLink = [];
//#primary-menu li[id*=menu]
        const navLinks = await $('#primary-menu').$$("li[id*=menu]"); //6

        for (const link of navLinks){
            actualLink.push(await link.getText());
        }

        //not working
        /*navLinks.forEach(async (link) => {
            actualLink.push(await link.getText());
        });*/


    await expect(expectedLinks).toEqual(actualLink);

    //await browser.debug();
    });
});