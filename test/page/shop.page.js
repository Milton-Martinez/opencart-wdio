import Methods from "./methods.page";


class Shop extends Methods {
    constructor() {
        super();
    }
    /** SELECTORS **/
    get shopItem(){ return $$('.product-block.item-default'); }
    get shopItemAddCartButton(){ return $$('.product-block.item-default [data-loading-text="Loading..."]'); }//[0]: cart button - [1+]: items to buy add to cart button

    /** METHODS **/
    //TODO: if a product doesn't existe dude ? jumm
    async buyAItem (itemNumber = 0){
        await this.hoverElement(this.shopItem[itemNumber]);
        await this.clickAnElement(this.shopItemAddCartButton[itemNumber]);//[0]: cart button - [itemNumber+1]: items to buy add to cart button
    }

}

export const shop = new Shop();;