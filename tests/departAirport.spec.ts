import { test, expect} from '@playwright/test';

test.beforeEach(async({page}) => {
    await page.goto('https://www.rivieratravel.co.uk//')
    const acceptCookies = page.locator('button', { hasText: 'Allow all' });
  if (await acceptCookies.isVisible()) {
    await acceptCookies.click();
  }
})

 const expectedAirports = [
'All London',
'All Midlands',
'All Scotland',
'All North England',
'All Ireland',
'All Waales & South Wales',  
'Belfast International',
'Birmingham',
'Bristol',
'Cardiff',
'Dublin',
'East Midlands',
'Edinburgh',
'Glasgow',
'Leeds Bradford',
'London Gatwick',
'London Heathrow',
'London Luton',
'London Stansted',
'Manchester',
'Newcastle',
'Newquay',
'Liverpool'
 ];
 

test('Validate airports', async ({ page }) => {

  const departingAirports = page.getByText('Departing').first();
    await departingAirports.click()

  const byAirOption = page.getByText('By Air');
    await byAirOption.click()


  
  const airportList = page.locator('.holiday-search__transport-subgroup'); 
  //await expect(airportList).toBeVisible();

    await expect(airportList).toHaveText(expectedAirports.sort());
  //Sort both arrays to ensure the comparison is order-independent

//yuiyuiyuiyiiyuiyuiyi

//abababababababab

});