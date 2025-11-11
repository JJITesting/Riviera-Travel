import { test, expect} from '@playwright/test';

test.beforeEach(async({page}) => {
    await page.goto('https://www.rivieratravel.co.uk//')
    const acceptCookies = page.locator('button', { hasText: 'Allow all' });
  if (await acceptCookies.isVisible()) {
    await acceptCookies.click();
  }
})

const expectedAfricaDestinations = [

  'Botswana',
  'Egypt',
  'Kenya',
  'Morocco',
  'South Africa',
  'Zambia',

];

const expectedAsiaDestinations = [
  
  'Bhutan',
  'Borneo',
  'Cambodia',
  'China',
  'India',
  'Japan',
  'Laos',
  'Malaysia',
  'Nepal',
  'Singapore',
  'South Korea',
  'Sri Lanka',
  'Thailand',
  'Uzbekistan',
  'Vietnam', 
  
];

const expectedEuropeDestinations = [

  'Austria', 
  'Belgium',
  'Croatia',
  'Czech Republic',
  'France',
  'Germany',
  'Greece',
  'Hungary',
  'Iceland',
  'Italy',
  'Netherlands',
  'Poland',
  'Portugal',
  'Slovenia',
  'Spain',
  'Switzerland',

];

test('Validate destination europe', async ({ page }) => {

  const destinationsEurope = page.getByText('Anywhere').first();
    await destinationsEurope.click()
    await page.waitForTimeout(5000);

    await page.getByTitle('Select a region').locator(':text-is("holiday-search__region-radio holiday-search__region-radio--europe form-radio")').click();


  //await page.locator(':text-is("holiday-search__region-radio holiday-search__region-radio--europe form-radio")').click();


  //const byRegionEurope = page.locator(':text-is("holiday-search__region-radio holiday-search__region-radio--europe form-radio")')
    //await byRegionEurope.click()

   //await page.locator('.fieldset-wrapper edit-wrapper-42 :text-is("Europe")').click(); 
   


  
  //const europeList = page.locator('.fieldset-wrapper'); 
  //await expect(airportList).toBeVisible();

    //await expect(europeList).toHaveText(expectedEuropeDestinations.sort());
  //Sort both arrays to ensure the comparison is order-independent

//llllllllllllllllllllllllllll

});