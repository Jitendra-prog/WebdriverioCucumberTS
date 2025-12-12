import { Given, When, Then } from '@wdio/cucumber-framework';

import GettingStartedPage from '../pageobjects/gettingstarted.page';

Then(/^I should land on my getting Started screen$/, async function () {
  await browser.pause(25000);
  browser.switchWindow('Product Details | Bendigo Bank Apply Online | Credit Card');
  await expect(GettingStartedPage.gettingStartedSection).toBeExisting();
});

When(/^I enter preferred credit limit$/, async function () {
  await GettingStartedPage.gettingStartedSection.setValue("10000");
  await browser.pause(25000);
});

When(/^I select general purpose use option$/, async function () {
  await GettingStartedPage.generalPurposeUserOption.click();
  await browser.pause(25000);
});

Then(/^I click Continue Button$/, async function () {
  await GettingStartedPage.continueButton.click();
  await browser.pause(25000);
});

When(/^I select relationship status$/, async function () {
  await GettingStartedPage.relationshipStatusDropdown.selectByIndex(1);
});

When(/^I choose am I current customer of bank$/, async function () {
  (await GettingStartedPage.currentCustomerNoButton).click();
});

When(/^I choose do I have promo code$/, async function () {
  (await GettingStartedPage.currentCustomerNoButton).click();
});

When(/^I select meet criteria as Yes$/, async function () {
  (await GettingStartedPage.meetCriteriaYesButton).click();
});

When(/^I enter location$/, async function () {
  (await GettingStartedPage.enterLocationTextField).setValue("Melbourne");
});

When(/^Click find button$/, async function () {
  (await GettingStartedPage.findButton).click();
});

When(/^I select Clifton Hill option from the list$/, async function () {
  (await GettingStartedPage.listCliftonHillItem).click();
});
