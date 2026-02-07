# Welcome to your Expo app 👋

This is an [Expo](https://expo.dev) project created with [`create-expo-app`](https://www.npmjs.com/package/create-expo-app).

## Get started

1. Install dependencies

   ```bash
   npm install
   ```

2. Start the app

   ```bash
   npx expo start
   ```

In the output, you'll find options to open the app in a

- [development build](https://docs.expo.dev/develop/development-builds/introduction/)
- [Android emulator](https://docs.expo.dev/workflow/android-studio-emulator/)
- [iOS simulator](https://docs.expo.dev/workflow/ios-simulator/)
- [Expo Go](https://expo.dev/go), a limited sandbox for trying out app development with Expo

You can start developing by editing the files inside the **app** directory. This project uses [file-based routing](https://docs.expo.dev/router/introduction).

## Get a fresh project

When you're ready, run:

```bash
npm run reset-project
```

This command will move the starter code to the **app-example** directory and create a blank **app** directory where you can start developing.

## Learn more

To learn more about developing your project with Expo, look at the following resources:

- [Expo documentation](https://docs.expo.dev/): Learn fundamentals, or go into advanced topics with our [guides](https://docs.expo.dev/guides).
- [Learn Expo tutorial](https://docs.expo.dev/tutorial/introduction/): Follow a step-by-step tutorial where you'll create a project that runs on Android, iOS, and the web.

## Testing

This project uses [Playwright](https://playwright.dev) for end-to-end testing of the web version of the app.

### Prerequisites

1. **Install Playwright browsers** (first time setup):
   ```bash
   pnpm exec playwright install chromium
   ```
   Or install all browsers:
   ```bash
   pnpm exec playwright install
   ```

2. **Start the Expo web server** before running tests:
   ```bash
   pnpm web
   ```
   The app should be accessible at `http://localhost:8081`

### Running Tests

- **Run all tests**:
  ```bash
  pnpm test
  ```

- **Run tests in UI mode** (interactive):
  ```bash
  pnpm test:ui
  ```

- **Run tests in debug mode**:
  ```bash
  pnpm test:debug
  ```

- **Run tests in headed mode** (see browser):
  ```bash
  pnpm test:headed
  ```

### Test Structure

Tests are located in the `tests/` directory:

- `tests/navigation.spec.ts` - Navigation flow tests covering:
  - Login screen (form fields, login button, navigation)
  - Profiles screen (profile cards, navigation to PIN)
  - PIN screen (keypad, back navigation)
  - Complete navigation flows

- `tests/helpers.ts` - Reusable helper functions for common test operations

### Playwright MCP Setup for Cursor

To enable visual testing capabilities in Cursor IDE using Playwright MCP:

1. **Configure Playwright MCP in Cursor settings**:
   - Open Cursor settings
   - Navigate to MCP (Model Context Protocol) settings
   - Add Playwright MCP server:
     ```json
     {
       "mcpServers": {
         "playwright": {
           "command": "npx",
           "args": ["@playwright/mcp@latest"]
         }
       }
     }
     ```

2. **Verify MCP is working**:
   - Use Playwright MCP tools to navigate to `http://localhost:8081`
   - Take snapshots to verify the app is accessible

See `.cursor.md` for detailed workflow documentation on using Playwright MCP for verification during development.

### Writing Tests

When writing new tests:

1. Use helper functions from `tests/helpers.ts` for common operations
2. Follow the existing test structure and naming conventions
3. Use accessibility-first selectors (getByRole, getByText, etc.)
4. Test complete user journeys, not just individual components
5. Verify navigation and state changes appropriately

### Test Configuration

Test configuration is in `playwright.config.ts`:
- Base URL: `http://localhost:8081` (Expo web default port)
- Test directory: `./tests`
- Browsers: Chromium, Firefox, WebKit
- Web server: Automatically starts Expo web server if not running

## Join the community

Join our community of developers creating universal apps.

- [Expo on GitHub](https://github.com/expo/expo): View our open source platform and contribute.
- [Discord community](https://chat.expo.dev): Chat with Expo users and ask questions.
