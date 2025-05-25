const { test, expect } = require('@playwright/test');

test.describe('American Express UI Flow', () => {
    
    test('Test User Flow on AMEX Website', async ({ page }) => {
        
        // Step 1: Open homepage and click "Cartes American Express"
        await page.goto('https://www.americanexpress.com/fr-fr/?inav=NavLogo');
        await page.getByTestId('granular-banner-button-accept-all').click();
        await page.click('#label-tab-open-cards');
        await page.getByRole('link', { name: 'Les Cartes American Express' }).click();

        // Step 2: Open the All Cards page and click on "En Savoir Plus"
        await page.goto('https://www.americanexpress.com/fr/carte-de-paiement/types-cartes/cartes-proprietaires/?intlink=fr-fr-hp-product1-all-pry_cartes-01032021');
        await page.waitForLoadState('networkidle');
        await page.getByTestId('granular-banner-button-accept-all').click();
        await page.getByRole('link', { name: 'En savoir plus' }).first().click();


        // Step 3: Open the Gold Card Description page
        await page.goto('https://www.americanexpress.com/fr-fr/charge-cards/apply/personal/gold?sourcecode=A0000FE43V&intlink=fr-amex-cardshop-details-apply-GoldCardAmericanExpress-siderailPlease');
        await page.getByRole('button', { name: 'Documents requis' }).click();
        await page.locator('div[role="dialog"]').getByText('Demander ma Carte', { exact: true }).click();



        // Step 4: User details page and click "Sauvegarder et Continuer"
        await page.goto('https://www.americanexpress.com/fr-fr/charge-cards/apply/personal/gold?sourcecode=A0000FE43V&intlink=fr-amex-cardshop-details-apply-GoldCardAmericanExpress-siderail');
        await page.locator('#fieldControl-input-firstName').click();
        await page.locator('#fieldControl-input-firstName').fill('Test');
        await page.locator('#fieldControl-input-lastName').click();
        await page.locator('#fieldControl-input-lastName').fill('User');
        await page.locator('#fieldControl-input-email').click();
        await page.locator('#fieldControl-input-email').fill('testuser@test123.com');
        await page.getByRole('button', { name: 'Sauvegarder et Continuer' }).click();


        // Step 5: Validation
        const currentUrl = page.url();
        expect(currentUrl).toContain('confirmation');  
    });
});
