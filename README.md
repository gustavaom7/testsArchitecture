# 🧪 SauceDemo Automation Project

![Cypress Tests](https://github.com/gustavaom7/testsArchitecture/actions/workflows/cypress.yml/badge.svg)
[![Quality](https://img.shields.io/badge/Quality-Assurance-orange)](https://github.com/gustavaom7/testsArchitecture)

Professional test automation suite developed with **Cypress** and **JavaScript**, targeting the **SauceDemo** platform. This project showcases advanced automation patterns and full integration with CI/CD pipelines.

---

## 🚀 Key Features

* **Page Object Model (POM):** Robust architecture separating page elements and actions from test logic.
* **Data-Driven Testing:** Efficient use of `fixtures` for managing user credentials and test data.
* **Automated Reporting:** Visual and technical evidence generated via **Mochawesome**.
* **CI/CD Pipeline:** Automated regression runs on every push using **GitHub Actions**.

---

## 🏗️ Project Structure

The project is organized within the `ui/` directory for better maintainability:

* **`cypress/e2e/`**: Contains the test specifications (e.g., `login.spec.js`).
* **`cypress/support/pageobjects/`**: Houses the Page Object classes.
* **`cypress/fixtures/`**: Stores static data files like `loginData.json`.
* **`.github/workflows/`**: Configuration for automated test execution.

---

## 🚦 How to Run

### 1. Installation
Navigate to the `ui/` folder and install dependencies:
``bash
cd ui && npm install

### 2. Local Execution

- **Interactive Mode:** `npx cypress open`
- **Headless Mode (Chrome):** `npm run test:chrome`


## 📊 CI/CD Workflow

The automation is configured to run on **Ubuntu-latest** via **GitHub Actions**:

- **Trigger:** Every push to the `main` branch.
- **Environment:** Sets up Node.js and installs dependencies using `package-lock.json`.
- **Execution:** Runs the `test:chrome` script.
- **Artifacts:** Uploads the HTML report for review even if tests fail.

## 👤 Author

**Gustavo** - QA Engineer

- [LinkedIn](https://www.linkedin.com/in/qa-gustavo-mesquita/)
- [GitHub](https://github.com/gustavaom7)

_Developed with ❤️ for quality assurance._