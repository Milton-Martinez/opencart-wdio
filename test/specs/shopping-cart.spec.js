import { homepage, navbar, shop } from "../page";

describe('OZCART: SHOPPING CART TESTS', () => {
    
    beforeEach( async () =>{
        await homepage.openURL("https://demo.ozcart.com/_v5/");
    })

    it('Shopping flow', async () => {
        //buying items
        await navbar.goToShopScarves();
        await shop.buyAItem(1);
        await shop.buyAItem(0);
        //except
        await shop.clickCartButton();
        await shop.checkTotalInCart();
        // await browser.pause(10000);

    });
});