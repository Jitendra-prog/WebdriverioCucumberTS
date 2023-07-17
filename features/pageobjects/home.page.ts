import { ChainablePromiseElement } from 'webdriverio';

import basePage from './base.page';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class HomePage extends basePage {
    /**
     * define selectors using getter methods
     */
    public get bankingTab () {
        return $('#BendigoBankHeaderConfig-16378-re-mega-menu-desc-menu-row-menu-item-banking');
    }

    public get bankAccountSubTab () {
        return $('#BendigoBankHeaderConfig-16378-re-mega-menu-desc-mega-menu-row-title-0-bank-accounts');
    }

    public get creditCardSubTab () {
        return $('#BendigoBankHeaderConfig-16378-re-mega-menu-desc-mega-menu-row-title-1-credit-cards');
    }

    public get personalLoanSubTab () {
        return $('#BendigoBankHeaderConfig-16378-re-mega-menu-desc-mega-menu-row-title-2-personal-loans');
    }

    public get travelAndInternatioanlPaymentsSubTab () {
        return $('#BendigoBankHeaderConfig-16378-re-mega-menu-desc-mega-menu-row-title-3-travel-and-international-payments');
    }


    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    public async clickBankingTab () {
        await this.bankingTab.click();
    }

    public async clickCreditCardSubTab () {
        await this.creditCardSubTab.click();

    }
}

export default new HomePage();
