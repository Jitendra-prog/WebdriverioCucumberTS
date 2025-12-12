import { ChainablePromiseElement } from 'webdriverio';

import basePage from './base.page';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class CreditCardsPage extends basePage {
    /**
     * define selectors using getter methods
     */
    public get bendigoBrightCreditCardApplyButton () {
        return $('#Button-232952');
    }

    public get checkMyEligibilityText () {
        return $('h1=Check my eligibility');
    }

    public get continueToApplyButton () {
        return $('#Button-237631');
    }

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    public async clickOnBendigoBrightCreditCardApplyButton () {
        await browser.scroll(0, 850);
        await browser.pause(5000);
        await this.bendigoBrightCreditCardApplyButton.click();
    }

    public async clickOnContinueToApplyButton () {
        await this.continueToApplyButton.click();
    }
}

export default new CreditCardsPage();
