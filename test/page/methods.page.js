
class Methods {
    constructor() {
    }

    /**
     * @function navigateTo It executes the main browser method to open a specific URL within the actual capability
     * @param {String} path the URL path you want to pass to the Browser object
     * @param {boolean} loose if navigating a page should not close any alerts that arise, Default is yes close any alert
     */
    async navigateTo(path, loose = false) {
        await browser.maximizeWindow();
        await browser.url(path);
        if(await browser.isAlertOpen()) {
            if (!loose) await browser.acceptAlert()
            else throw new Error(`An alert was opened with "${await browser.getAlertText()}"`)
        }
    }
}

export default Methods;