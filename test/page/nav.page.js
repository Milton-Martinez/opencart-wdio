import Methods from "./methods.page";


class Navbar extends Methods {
    constructor() {
        super();
    }
    /**\ SELECTORS **/
    get shopMenu() { return $$('#ozc-megamenu #bs-megamenu ul li.parent.dropdown.aligned-left')[1] }
    get shopMenu_accessories() { return $$('#ozc-megamenu .dropdown-menu.level1 li:has(a[href="https://demo.ozcart.com/_v5/accessories"])') }
    get shopMenu_accessories_scarves () { return $$('#ozc-megamenu a[href="https://demo.ozcart.com/_v5/accessories/scarves"]') }
    get shopMenu_jewellery() { return $$('#ozc-megamenu .dropdown-menu.level1 li:has(a[href="https://demo.ozcart.com/_v5/jewellery"])') }
    get shopMenu_jeweller_earrings() { return $$('#ozc-megamenu .dropdown-menu.level1 li:has(a[href="https://demo.ozcart.com/_v5/jewellery/earrings"])') }
    
    /** METHODS **/
    

}

export const nav = new Navbar();;