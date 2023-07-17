import { Given, When, Then } from '@wdio/cucumber-framework';

import HomePage from '../pageobjects/home.page';

Given(/^I open the browser and load the URL (.+)$/, async function (url) {
  await browser.url(url);
  await browser.maximizeWindow();
});

When(/^I click on Banking Tab$/, async function () {
  await HomePage.clickBankingTab();
});

When(/^I should see subtabs available$/, async function () {
  await expect(HomePage.bankAccountSubTab).toBeExisting();
  await expect(HomePage.creditCardSubTab).toBeExisting();
  await expect(HomePage.personalLoanSubTab).toBeExisting();
  await expect(HomePage.travelAndInternatioanlPaymentsSubTab).toBeExisting();
});

When(/^I click on Credit Cards Sub Tab$/, async function () {
  await HomePage.clickCreditCardSubTab();
});