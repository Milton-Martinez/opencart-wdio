import Methods from "./methods.page";


class Navbar extends Methods {
    constructor() {
        super();
    }
    /** SELECTORS **/
    get shopMenu() { return $$('#ozc-megamenu #bs-megamenu ul li.parent.dropdown.aligned-left')[1] }
    get shopMenu_accessories() { return $('#ozc-megamenu .dropdown-menu.level1 li:has(a[href="https://demo.ozcart.com/_v5/accessories"])') }
    get shopMenu_accessories_scarves () { return $('#ozc-megamenu a[href="https://demo.ozcart.com/_v5/accessories/scarves"]') }
    get shopMenu_jewellery() { return $('#ozc-megamenu .dropdown-menu.level1 li:has(a[href="https://demo.ozcart.com/_v5/jewellery"])') }
    get shopMenu_jeweller_earrings() { return $('#ozc-megamenu a[href="https://demo.ozcart.com/_v5/jewellery/earrings"]') }
    
    /** METHODS **/
    async goToShopScarves(){
        await this.hoverElement(this.shopMenu);
        await this.hoverElement(this.shopMenu_accessories);
        await this.shopMenu_accessories_scarves.click();
    }
    //TODO: el problema esta aqui, cuando se compran dos items y se quiere seleccionar el menu shop se selecciona el siguiente a shop
    async goToShopJewellery(){
        await this.hoverElement(this.shopMenu);
        await this.hoverElement(this.shopMenu_jewellery);
        await this.shopMenu_jeweller_earrings.click();
    }

}

export const navbar = new Navbar();;