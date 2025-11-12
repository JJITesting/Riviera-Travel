import { test, expect} from '@playwright/test';
import { assertCheckboxWithLabelIsChecked } from '../page-objects/assertions';


test.beforeEach(async({page}) => {
    await page.goto('https://www.rivieratravel.co.uk/')
    const acceptCookies = page.locator('button', { hasText: 'Allow all' });
  if (await acceptCookies.isVisible()) {
    await acceptCookies.click();
  }
})

const expectedOceanCruiseTypes = [
    'Yacht Cruises',
    'Small Ship Cruises',
    'Expedition Cruises',
    'Tall Ship Cruises',
    'Other Cruises',
    'Cruises to the Mediterranean',
  ];

test('Display all Ocean Cruise Holidays', async ({ page }) => {

await page.getByRole('checkbox', {name: "Ocean Cruises"}).click({force: true}); 
await page.locator ('#edit-0').click();

for (const type of expectedOceanCruiseTypes) {
    await assertCheckboxWithLabelIsChecked(page, type);
  }
 
})

