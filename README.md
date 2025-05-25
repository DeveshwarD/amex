# AMEX UI Testing Framework

This repository contains a UI testing framework built using Playwright and JavaScript to test the user flow for the American Express FR credit card application process. 
The test ensures that UI elements are properly validated during each step of the process, as the user traverses through various pages.

## Assumptions
- The American Express website is accessible and functional at the provided URLs.
- I could not find the some mentioned text/buttons on the given URL's so I adjusted my code for that
- The Playwright framework is used for browser automation.
- The test interacts with the following pages:
  1. FR Homepage - [Homepage URL](https://www.americanexpress.com/fr-fr/?inav=NavLogo)
  2. FR All Cards - [All Cards URL](https://www.americanexpress.com/fr/carte-de-paiement/types-cartes/cartes-proprietaires/?intlink=fr-fr-hp-product1-all-pry_cartes-01032021)
  3. Gold Card Description Page - [Gold Card URL](https://www.americanexpress.com/fr-fr/charge-cards/apply/personal/gold?sourcecode=A0000FE43V&intlink=fr-amex-cardshop-details-apply-GoldCardAmericanExpress-siderailPlease)
  4. User Details Page - [User Details URL](https://www.americanexpress.com/fr-fr/charge-cards/apply/personal/gold?sourcecode=A0000FE43V&intlink=fr-amex-cardshop-details-apply-GoldCardAmericanExpress-siderail)

## Prerequisites
Before running the tests, ensure that the following tools are installed:

- Node.js (version 14 or higher) - [Download Node.js](https://nodejs.org/)
- Playwright - Used for UI automation.

## Project Setup

1. Clone the Repository
Clone this repository to your local machine:

git clone https://github.com/yourusername/amex-automation.git

2. Install Dependencies

- npm install

3. Install Playwright Browsers

- npx playwright install

4. Run tests

- npm test (OR) npx playwright test --headed

5. Test Flow
   
The test simulates a user navigating through the following pages on the American Express website:
FR Homepage: The user clicks on "Cartes American Express."
All Cards Page: The user clicks "En Savoir Plus" under the "Cartes Gold American Express."
Gold Card Description Page: The user clicks "Demandez Votre Carte" to apply for a Gold Card.
User Details Page: The user fills in junk data for the name and email and clicks "Sauvegarder et Continuer."

The test validates that the user can successfully navigate between the pages and fill in the application form.

