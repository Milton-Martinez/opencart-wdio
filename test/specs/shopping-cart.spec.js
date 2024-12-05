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
        
        //buying items
        await navbar.goToShopJewellery();
        await shop.buyAItem(1);

        //except
        await browser.pause(9000);

    });
});