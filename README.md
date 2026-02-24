# 🧪 Advanced Quality Architecture - SauceDemo & API

![Cypress Tests](https://github.com/gustavaom7/testsArchitecture/actions/workflows/cypress.yml/badge.svg)
[![Quality](https://img.shields.io/badge/Quality-Assurance-orange)](https://github.com/gustavaom7/testsArchitecture)

Professional hybrid automation suite (GUI & API) developed with **Cypress** and **JavaScript**. This project demonstrates advanced automation patterns, performance optimization, and full integration with CI/CD pipelines.

---

## 🚀 Key Features & Engineering Patterns

### 🖥️ UI Automation (GUI)
* **Page Object Model (POM):** Scalable architecture for UI elements and actions.
* **Session Management:** Optimized login flow using `cy.session` to bypass repetitive UI login steps, reducing execution time by ~30%.
* **Custom Commands:** Encapsulated reusable logic for cleaner test scripts.

### 🔌 API Automation (Backend)
* **Data-Driven Testing:** Full use of `fixtures` (.json) to separate test data from execution logic.
* **Contract Testing:** Schema validation to ensure API response integrity and data types.
* **Security Testing:** Simulation of Header Authentication (Bearer Tokens).
* **Negative Scenarios:** Coverage for 404 errors, bad requests, and SLA performance validation.

### ⚙️ DevOps & CI/CD
* **GitHub Actions:** Automated regression suite triggered on every push.
* **Automated Reporting:** Rich HTML technical evidence generated via **Mochawesome**.
* **Test Tagging:** Selective execution using `@api`, `@gui`, or `@smoke` tags for faster feedback loops.

---

## 🏗️ Project Structure

```text
testsArchitecture/
├── .github/workflows/   # CI/CD Pipeline configuration
├── cypress/
│   ├── e2e/
│   │   ├── api/         # Backend contract and functional tests
│   │   └── gui/         # UI/Functional tests (SauceDemo)
│   ├── fixtures/        # Test data in JSON format
│   └── support/         # Custom commands and global configurations
├── cypress.config.js    # Cypress main configuration
└── package.json         # Scripts and dependencies
```

## 🚦 Local Execution
1. **Installation**

`npm install`


2. **Running Tests**

**Interactive Mode:** `npx cypress open`

**Headless Mode (Chrome):** `npm run test:chrome`

**Only API Tests:** `npm run test:api`

**Only UI Tests:** `npm run test:gui`

## 📊 CI/CD Workflow
The automation runs on **Ubuntu-latest** via **GitHub Actions**:

**Trigger**: Every push to the main branch.

**Execution**: Runs the regression suite in Chrome.

**Artifacts**: Uploads the Mochawesome HTML Report for review even if tests fail.

## 👤 Author

**Gustavo** - QA Engineer

- [LinkedIn](https://www.linkedin.com/in/qa-gustavo-mesquita/)
- [GitHub](https://github.com/gustavaom7)

_Developed with ❤️ for quality assurance._