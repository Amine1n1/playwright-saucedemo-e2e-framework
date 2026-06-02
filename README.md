# 🧪 Saucedemo Playwright E2E Framework

![Playwright Tests](https://github.com/Amine1n1/playwright-saucedemo-e2e-framework/actions/workflows/playwright.yml/badge.svg)

E2E test automation framework for [saucedemo.com](https://www.saucedemo.com) built with Playwright + TypeScript.

## 🛠️ Tech Stack
- [Playwright](https://playwright.dev/) — E2E Testing Framework
- TypeScript — Type-safe test code
- Page Object Model (POM) — Maintainable test architecture
- GitHub Actions — CI/CD pipeline
- dotenv — Environment variable management

## 📁 Project Structure
\`\`\`
├── .github/workflows/     # GitHub Actions CI pipeline
├── auth/                  # Saved browser session (gitignored)
├── fixtures/              # Custom Playwright fixtures
├── pages/                 # Page Object classes
├── test-data/             # Test data (users, products)
├── tests/
│   ├── login/             # Login tests
│   ├── cart/              # Add / remove cart tests
│   ├── checkout/          # Checkout flow tests
│   └── sorting/           # Sorting tests
├── global.setup.ts        # Global login + session setup
└── playwright.config.ts   # Playwright configuration
\`\`\`

## 🚀 Getting Started

### 1. Install dependencies
\`\`\`bash
npm install
npx playwright install chromium
\`\`\`

### 2. Setup environment variables
\`\`\`bash
cp .env.example .env
\`\`\`

### 3. Run tests
\`\`\`bash
# Run all tests
npx playwright test

# Run with UI mode
npx playwright test --ui

# Run specific test file
npx playwright test tests/login/login.spec.ts

# Show HTML report
npx playwright show-report
\`\`\`

## 🧪 Test Coverage
| Area | Tests |
|---|---|
| Login | Valid login, wrong password, locked user, password masking |
| Cart | Add to cart, remove from cart |
| Checkout | Happy path, error handling |
| Sorting | Price low→high, high→low, name A→Z, Z→A |

## 💡 Key Features
- **Global Setup** — logs in once and saves session via `storageState`, no repeated login per test
- **Page Object Model** — all selectors and actions encapsulated in page classes
- **Custom Fixtures** — clean test code via `pm`, `validUser`, `products` fixtures
- **CI/CD** — runs automatically on every push via GitHub Actions