import { Page, expect } from '@playwright/test';

/**
 * Asserts that a checkbox associated with a label is checked.
 * Works for Drupal-style markup where <label for="..."><span>Label</span></label>
 */
export async function assertCheckboxWithLabelIsChecked(page: Page, labelText: string) {
  const label = page.locator(`label:has-text("${labelText}")`);
  const checkboxId = await label.getAttribute('for');
  if (!checkboxId) {
    throw new Error(`No checkbox found for label: ${labelText}`);
  }
  const checkbox = page.locator(`#${checkboxId}`);
  await expect(checkbox).toBeChecked();
}