import { Given, When, Then } from '@wdio/cucumber-framework';

import CreditCardsPage from '../pageobjects/creditcards.page';

When(/^I click on Bendigo Bright Credit Card$/, async function () {
  await CreditCardsPage.clickOnBendigoBrightCreditCardApplyButton();
});

Then(/^I should land on my eligibility screen$/, async function () {
  await expect(CreditCardsPage.checkMyEligibilityText).toHaveText("Check my eligibility");
});

When(/^I click on Continue to apply button$/, async function () {
  await CreditCardsPage.clickOnContinueToApplyButton();
});