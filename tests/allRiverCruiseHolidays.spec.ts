import { test, expect} from '@playwright/test';

test.beforeEach(async({page}) => {
    await page.goto('https://www.rivieratravel.co.uk/')
    const acceptCookies = page.locator('button', { hasText: 'Allow all' });
  if (await acceptCookies.isVisible()) {
    await acceptCookies.click();
  }
})

test('Display all River Cruise Holidays', async ({ page }) => {

await page.getByRole('checkbox', {name: "River Cruises"}).click({force: true}); 

await page.locator ('#edit-0').click();

//await page.getByRole('button', {name: 'Search'}).second().click();


  
})

