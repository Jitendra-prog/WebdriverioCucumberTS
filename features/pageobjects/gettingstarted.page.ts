import { ChainablePromiseElement } from 'webdriverio';

import basePage from './base.page';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class GettingStartedPage extends basePage {
    /**
     * define selectors using getter methods
     */
    public get gettingStartedSection () {
        return $('h2=Getting Started');
    }

    public get preferredCreditLimitngTextField () {
        return $('#creditLimitAmountInput');
    }

    public get generalPurposeUserOption () {
        return $('button=General purpose use');
    }

    public get continueButton () {
        return $('type=submit');
    }

    public get relationshipStatusDropdown () {
        return $('name=maritalStatus');
    }

    public get currentCustomerNoButton () {
        return $('button=No');
    }

    public get meetCriteriaYesButton () {
        return $('button=Yes');
    }

    public get enterLocationTextField () {
        return $('name=branchSearch');
    }

    public get findButton () {
        return $('#branchSearch');
    }

    public get listCliftonHillItem () {
        return $('list=Clifton Hill');
    }

}

export default new GettingStartedPage();
