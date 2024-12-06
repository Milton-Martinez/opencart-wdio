import Methods from "./methods.page";


class Shop extends Methods {
    constructor() {
        super();
    }
    /** SELECTORS **/
    get shopItem() { return $$('.product-block.item-default'); }
    get shopItemAddCartButton() { return $$('.product-block.item-default [data-loading-text="Loading..."]'); }//[0]: cart button - [1+]: items to buy add to cart button
    get cartButton() { return $('.pull-right.clearfix'); }
    // get itemPrice() { return $$('.table.table-striped td.text-right') }
    async itemPrice() { return await $$('//td[contains(@class, "text-right") and contains(text(),"$")]') }
    get totalItems() { return $$('.table.table-bordered td.text-right') } //[] sub total
    

    /** METHODS **/
    async buyAItem (itemNumber = 0){
        await this.hoverElement(this.shopItem[itemNumber]);
        await this.shopItemAddCartButton[itemNumber].isExisting();
        await this.clickAnElement(this.shopItemAddCartButton[itemNumber]);//[0]: cart button - [itemNumber+1]: items to buy add to cart button
    }
    async clickCartButton(){
        await this.clickAnElement(this.cartButton);
        browser.pause(1000);
    }
    async checkTotalInCart(){
        // await this.itemPrice.isExisting();
        const prices = await this.selectPricesInTable( this.itemPrice);
        const total = await this.sumPrices(prices);
        await expect(total).toBe(Number(prices[prices.length - 1]));
    }

}

export const shop = new Shop();