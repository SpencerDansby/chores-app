import { Page, expect } from '@playwright/test';

/**
 * Wait for Expo Router navigation to complete
 * Expo Router uses client-side navigation, so we need to wait for the route to change
 */
export async function waitForNavigation(page: Page, timeout = 10000) {
  await page.waitForLoadState('networkidle', { timeout });
}

/**
 * Wait for a specific text to appear on the page
 */
export async function waitForText(page: Page, text: string, timeout = 10000) {
  await page.waitForSelector(`text=${text}`, { timeout, state: 'visible' });
}

/**
 * Navigate to a specific route in the Expo app
 */
export async function navigateToRoute(page: Page, route: string) {
  await page.goto(route);
  await waitForNavigation(page);
}

/**
 * Fill the login form
 */
export async function fillLoginForm(
  page: Page,
  email: string,
  password: string
) {
  // Find email input by placeholder
  const emailInput = page.getByPlaceholder('Admin Email');
  await emailInput.fill(email);

  // Find password input by placeholder
  const passwordInput = page.getByPlaceholder('Secret Password');
  await passwordInput.fill(password);
}

/**
 * Click the login button and wait for navigation to profiles
 */
export async function clickLogin(page: Page) {
  const loginButton = page.getByRole('button', { name: /login/i });
  await loginButton.click();
  await waitForText(page, "Who's using TaskQuest?");
}

/**
 * Click on a profile by name (e.g., "Mom")
 */
export async function clickProfile(page: Page, profileName: string) {
  const profileButton = page.getByText(profileName, { exact: true });
  await profileButton.click();
  await waitForNavigation(page);
}

/**
 * Click the back button (arrow-back icon)
 */
export async function clickBackButton(page: Page) {
  // Find the back button by its icon or aria-label
  // Since MaterialIcons might not have accessible labels, we'll use a more specific selector
  // Try to find MaterialIcons arrow-back button first
  const arrowBackButton = page.locator('[class*="arrow-back"]').or(
    page.locator('button').filter({ has: page.locator('text=/arrow-back|back/i') })
  );
  
  if (await arrowBackButton.count() > 0) {
    await arrowBackButton.first().click();
  } else {
    // Fallback to other methods
    const backButton = page.locator('button').filter({ hasText: /back/i }).or(
      page.locator('[aria-label*="back" i]')
    ).or(
      page.locator('button').first() // Fallback to first button if no better selector
    );
    await backButton.first().click();
  }
  await waitForNavigation(page);
}

/**
 * Click the admin back button specifically (the arrow-back icon in the admin header)
 */
export async function clickAdminBackButton(page: Page) {
  // The admin back button is in a TouchableOpacity with a MaterialIcons arrow-back
  // The button is in the header and contains an arrow-back icon
  // We'll look for a clickable element near "Household Admin" text that contains the arrow icon
  // First, wait for the admin page to load
  await waitForText(page, 'TaskQuest Central');
  
  // Find the back button by looking for the TouchableOpacity/button that contains the arrow-back icon
  // The icon is rendered with font-family: material, so we look for elements with that style
  const backButton = page.locator('button, [role="button"], div[class*="TouchableOpacity"]').filter({
    has: page.locator('div[style*="font-family: material"], div[class*="arrow-back"]')
  }).first();
  
  // Alternative: find by position - it should be near "Household Admin" text
  const householdAdminText = page.getByText('Household Admin');
  const backButtonAlt = householdAdminText.locator('..').locator('button, [role="button"]').first();
  
  try {
    await backButton.click({ timeout: 2000 });
  } catch {
    await backButtonAlt.click({ timeout: 2000 });
  }
  
  await waitForNavigation(page);
}

/**
 * Enter a PIN digit by clicking the number button
 */
export async function clickPinDigit(page: Page, digit: string) {
  const digitButton = page.getByRole('button', { name: digit, exact: true });
  await digitButton.click();
}

/**
 * Click the backspace button on the PIN screen
 */
export async function clickPinBackspace(page: Page) {
  // Find backspace button - it's typically an icon button
  // We'll look for a button that contains the backspace icon or has aria-label
  const backspaceButton = page.locator('button').filter({ 
    has: page.locator('[aria-label*="backspace" i]')
  }).or(
    page.locator('button').filter({ hasText: /backspace/i })
  ).or(
    page.locator('button').nth(-1) // Last button is often backspace
  );
  await backspaceButton.click();
}

/**
 * Verify PIN visual indicators show the correct number of filled dots
 */
export async function verifyPinIndicators(page: Page, expectedCount: number) {
  // PIN indicators are typically small circular divs
  // We'll count the filled ones (those with background color)
  const indicators = page.locator('[class*="rounded-full"]').filter({ 
    hasNot: page.locator('[class*="border"]') 
  });
  const count = await indicators.count();
  expect(count).toBe(expectedCount);
}

/**
 * Get element by text content (useful for React Native Web elements)
 */
export async function getByText(page: Page, text: string) {
  return page.getByText(text, { exact: false });
}

/**
 * Wait for element to be visible by text
 */
export async function waitForElementByText(
  page: Page,
  text: string,
  timeout = 10000
) {
  await page.waitForSelector(`text=${text}`, { 
    timeout, 
    state: 'visible' 
  });
}

/**
 * Verify page title or heading
 */
export async function verifyPageHeading(page: Page, expectedText: string) {
  const heading = page.getByRole('heading', { name: expectedText });
  await expect(heading).toBeVisible();
}

/**
 * Complete login flow: fill form and click login
 */
export async function completeLoginFlow(
  page: Page,
  email: string = 'admin@example.com',
  password: string = 'password123'
) {
  await navigateToRoute(page, '/');
  await fillLoginForm(page, email, password);
  await clickLogin(page);
  await waitForText(page, "Who's using TaskQuest?");
}

/**
 * Complete navigation from login to PIN screen via Mom profile
 */
export async function navigateToPinScreen(page: Page) {
  await completeLoginFlow(page);
  await clickProfile(page, 'Mom');
  await waitForText(page, 'Welcome back, Sarah');
}

/**
 * Complete navigation from login to admin dashboard via Mom profile and PIN
 */
export async function navigateToAdminDashboard(page: Page, pin: string = '1234') {
  await navigateToPinScreen(page);
  
  // Enter PIN digits
  for (const digit of pin) {
    await clickPinDigit(page, digit);
  }
  
  // Wait for auto-navigation to admin dashboard
  await page.waitForTimeout(500);
  await waitForText(page, 'TaskQuest Central');
}
