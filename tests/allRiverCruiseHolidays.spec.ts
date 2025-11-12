import { test, expect} from '@playwright/test';
import { assertCheckboxWithLabelIsChecked } from '../page-objects/assertions';


test.beforeEach(async({page}) => {
    await page.goto('https://www.rivieratravel.co.uk/')
    const acceptCookies = page.locator('button', { hasText: 'Allow all' });
  if (await acceptCookies.isVisible()) {
    await acceptCookies.click();
  }
})

const expectedRiverCruiseTypes = [
    'Themed River Cruises',
    'Festive River Cruises',
    'River Cruises with Extensions',
    'Combination Cruises',
    'Douro River Cruises',
    'Seine River Cruises',
    'Saône River Cruises',
    'Rhône River Cruises',
    'Dutch Waterways River Cruises',
    'Rhine River Cruises',
    'Moselle River Cruises',
    'Main River Cruises',
    'Main-Danube Canal River Cruises',
    'Nile River Cruises',
    'Mekong River Cruises',
    'Danube River Cruises',
    'Yangtze River Cruises',
    'Ganges River Cruises',
  ];

test('Display all River Cruise Holidays', async ({ page }) => {

await page.getByRole('checkbox', {name: "River Cruises"}).click({force: true}); 
await page.locator ('#edit-0').click();

for (const type of expectedRiverCruiseTypes) {
    await assertCheckboxWithLabelIsChecked(page, type);
  }

})

