# Test info

- Name: American Express UI Flow >> Test User Flow on AMEX Website
- Location: /Users/babuprasathr/amex-tests/tests/amexTests.spec.js:5:5

# Error details

```
Error: expect(received).toContain(expected) // indexOf

Expected substring: "confirmation"
Received string:    "https://www.americanexpress.com/fr-fr/charge-cards/apply/personal/gold?sourcecode=A0000FE43V&intlink=fr-amex-cardshop-details-apply-GoldCardAmericanExpress-siderail"
    at /Users/babuprasathr/amex-tests/tests/amexTests.spec.js:46:28
```

# Page snapshot

```yaml
- banner:
  - img "American Express"
  - button "Quitter la page"
- main:
  - main:
    - img "CARTE GOLD AMERICAN EXPRESS"
    - heading "CARTE GOLD AMERICAN EXPRESS" [level=4]
    - button "Documents requis"
    - progressbar
    - paragraph: Souscrivez en quelques minutes
    - text: Je garantis l'exactitude des renseignements donnés sur ce formulaire en ligne.
    - form "Apply Journey Form":
      - heading "Vos informations de contact" [level=2]
      - group:
        - text: Civilité
        - radio "M."
        - text: M.
        - radio "Mme"
        - text: Mme
      - alert: Merci de préciser votre civilité.
      - text: Prénom
      - button "user":
        - img "user"
      - textbox "Prénom": Test
      - text: Nom
      - button "user":
        - img "user"
      - textbox "Nom": User
      - text: Date de naissance (JJ/MM/AAAA)
      - textbox "Date de naissance (JJ/MM/AAAA)"
      - alert: Vous devez avoir plus de 18 ans.
      - text: Adresse e-mail
      - button "user":
        - img "user"
      - textbox "Adresse e-mail": testuser@test123.com
      - text: Numéro de téléphone portable
      - button "user":
        - img "user"
      - text: Vous recevrez un code secret par SMS
      - combobox:
        - option "France +33" [selected]
        - option "Guadeloupe/Saint-Barthélemy/Saint Martin +590"
        - option "Guyane +594"
        - option "La Réunion/Mayotte +262"
        - option "Martinique +596"
        - option "Monaco +377"
        - option "Nouvelle-Calédonie +687"
        - option "Polynésie française +689"
        - option "Saint-Pierre-et-Miquelon +508"
        - option "Wallis-et-Futuna +681"
        - option "Afghanistan +93"
        - option "Afrique du Sud +27"
        - option "Albanie +355"
        - option "Algérie +213"
        - option "Allemagne +49"
        - option "Andorre +376"
        - option "Angola +244"
        - option "Anguilla +1"
        - option "Antarctique +672"
        - option "Antigua-et-Barbuda +1"
        - option "Arabie +966"
        - option "Argentine +54"
        - option "Arménie +374"
        - option "Aruba +297"
        - option "Australie +61"
        - option "Australie (Îles Christmas; Cocos; Heard-et-MacDonald) +61"
        - option "Autriche +43"
        - option "Azerbaïdjan +994"
        - option "Bahamas +1"
        - option "Bahreïn +973"
        - option "Bangladesh +880"
        - option "Barbade +1"
        - option "Belgique +32"
        - option "Belize +501"
        - option "Bénin +229"
        - option "Bermudes +1"
        - option "Bhoutan +975"
        - option "Biélorussie +375"
        - option "Birmanie +95"
        - option "Bolivie +591"
        - option "Bosnie-Herzégovine +387"
        - option "Botswana +267"
        - option "Brésil +55"
        - option "Brunei +673"
        - option "Bulgarie +359"
        - option "Burkina Faso +226"
        - option "Burundi +257"
        - option "Cambodge +855"
        - option "Cameroun +237"
        - option "Canada +1"
        - option "Cap-Vert +238"
        - option "Chili +56"
        - option "Chine +86"
        - option "Chypre +357"
        - option "Colombie +57"
        - option "Comores +269"
        - option "Corée du Nord +850"
        - option "Corée du Sud +82"
        - option "Costa Rica +506"
        - option "Côte d'Ivoire +225"
        - option "Croatie +385"
        - option "Cuba +53"
        - option "Curaçao/Pays-Bas caribéens +599"
        - option "Danemark +45"
        - option "Diego Garcia +246"
        - option "Djibouti +253"
        - option "Dominique +1"
        - option "Égypte +20"
        - option "Émirats arabes unis +971"
        - option "Équateur +593"
        - option "Érythrée +291"
        - option "Espagne +34"
        - option "Estonie +372"
        - option "Eswatini +268"
        - option "États fédérés de Micronésie +691"
        - option "États-Unis +1"
        - option "Éthiopie +251"
        - option "Fidji +679"
        - option "Finlande +358"
        - option "Gabon +241"
        - option "Gambie +220"
        - option "Géorgie +995"
        - option "Ghana +233"
        - option "Gibraltar +350"
        - option "Grèce +30"
        - option "Grenade +1"
        - option "Groenland +299"
        - option "Guam +1"
        - option "Guatemala +502"
        - option "Guinée +224"
        - option "Guinée équatoriale +240"
        - option "Guinée-Bissau +245"
        - option "Guyana +592"
        - option "Haïti +509"
        - option "Honduras +504"
        - option "Hong Kong +852"
        - option "Hongrie +36"
        - option "îles Ascension et Tristan da Cunha +247"
        - option "Îles Caïmans +1"
        - option "Îles Cook +682"
        - option "Îles Féroé +298"
        - option "Îles Malouines +500"
        - option "Îles Mariannes du Nord +1"
        - option "Îles Marshall +692"
        - option "Îles Salomon +677"
        - option "Îles Turques-et-Caïques +1"
        - option "Îles Vierges britanniques +1"
        - option "Îles Vierges des États-Unis +1"
        - option "Inde +91"
        - option "Indonésie +62"
        - option "Irak +964"
        - option "Iran +98"
        - option "Irlande +353"
        - option "Islande +354"
        - option "Israël +972"
        - option "Italie +39"
        - option "Jamaïque +1"
        - option "Japon +81"
        - option "Jordanie +962"
        - option "Kazakhstan +7"
        - option "Kenya +254"
        - option "Kirghizistan +996"
        - option "Kiribati +686"
        - option "Kosovo +383"
        - option "Koweït +965"
        - option "Laos +856"
        - option "Lesotho +266"
        - option "Lettonie +371"
        - option "Liban +961"
        - option "Liberia +231"
        - option "Libye +218"
        - option "Liechtenstein +423"
        - option "Lituanie +370"
        - option "Luxembourg +352"
        - option "Macao +853"
        - option "Macédoine du nord +389"
        - option "Madagascar +261"
        - option "Malaisie +60"
        - option "Malawi +265"
        - option "Maldives +960"
        - option "Mali +223"
        - option "Malte +356"
        - option "Maroc +212"
        - option "Maurice +230"
        - option "Mauritanie +222"
        - option "Mexique +52"
        - option "Moldavie +373"
        - option "Mongolie +976"
        - option "Monténégro +382"
        - option "Montserrat +1"
        - option "Mozambique +258"
        - option "Namibie +264"
        - option "Nauru +674"
        - option "Népal +977"
        - option "Nicaragua +505"
        - option "Niger +227"
        - option "Nigeria +234"
        - option "Niue +683"
        - option "Norvège +47"
        - option "(Norvège) Svalbard et Jan Mayen +47"
        - option "Nouvelle-Zélande +64"
        - option "(N-Z) Îles Pitcairn +64"
        - option "Oman +968"
        - option "Ouganda +256"
        - option "Ouzbékistan +998"
        - option "Pakistan +92"
        - option "Palaos +680"
        - option "Palestine +970"
        - option "Panama +507"
        - option "Papouasie-Nouvelle-Guinée +675"
        - option "Paraguay +595"
        - option "Pays-Bas +31"
        - option "Pérou +51"
        - option "Philippines +63"
        - option "Pologne +48"
        - option "Porto Rico +1"
        - option "Portugal +351"
        - option "Qatar +974"
        - option "République centrafricaine +236"
        - option "République démocratique du Congo +243"
        - option "République dominicaine +1"
        - option "République du Congo +242"
        - option "République Tchèque +420"
        - option "Roumanie +40"
        - option "Royaume-Uni +44"
        - option "(R-U) Guernesey / île de Man / Jersey +44"
        - option "Russie +7"
        - option "Rwanda +250"
        - option "Saint-Christophe-et-Niévès +1"
        - option "Sainte-Hélène +290"
        - option "Sainte-Lucie +1"
        - option "Saint-Marin +378"
        - option "Saint-Vincent-et-les-Grenadines +1"
        - option "Salvador +503"
        - option "Samoa +685"
        - option "Samoa américaines +1"
        - option "Sao Tomé-et-Principe +239"
        - option "Sénégal +221"
        - option "Serbie +381"
        - option "Seychelles +248"
        - option "Sierra Leone +232"
        - option "Singapour +65"
        - option "Slovaquie +421"
        - option "Slovénie +386"
        - option "Somalie +252"
        - option "Soudan +249"
        - option "Soudan du Sud +211"
        - option "Sri Lanka +94"
        - option "Suède +46"
        - option "Suisse +41"
        - option "Suriname +597"
        - option "Syrie +963"
        - option "Tadjikistan +992"
        - option "Taïwan +886"
        - option "Tanzanie +255"
        - option "Tchad +235"
        - option "Thaïlande +66"
        - option "Timor oriental +670"
        - option "Togo +228"
        - option "Tokelau +690"
        - option "Tonga +676"
        - option "Trinité-et-Tobago +1"
        - option "Tunisie +216"
        - option "Turkménistan +993"
        - option "Turquie +90"
        - option "Tuvalu +688"
        - option "Ukraine +380"
        - option "Uruguay +598"
        - option "Vanuatu +678"
        - option "Venezuela +58"
        - option "Viêt Nam +84"
        - option "Yémen +967"
        - option "Zambie +260"
        - option "Zimbabwe +263"
      - text: + 33
      - textbox "Numéro de téléphone portable"
      - alert: "Téléphone mobile obligatoire en chiffres uniquement et sans espaces. Exemple France, Guadeloupe, Martinique, Guyane, La Réunion, Saint- Barthélemy, Saint Martin, Mayotte: - 0612345678 - 0712345678 IMPORTANT : Pour tout autre pays ou région, dont Polynésie Française et Nouvelle Calédonie, merci de sélectionner l’indicatif du territoire correspondant et saisir le numéro de mobile sans le préfixe « 0 » au début."
      - text: En cliquant sur le bouton ci-dessous, j’autorise American Express à sauvegarder les informations saisies dès cette page et à me contacter directement ou par l’intermédiaire de son prestataire au sujet de ma demande de Carte.
      - alert: Veuillez corriger les erreurs ci-dessus pour continuer.
      - button "Sauvegarder et Continuer"
    - text: Conformément à la Loi Informatique et Libertés, vous disposez d'un droit d'accès, de rectification, de modification et de suppression des données qui vous concernent pour en savoir plus,
    - link "cliquez ici.":
      - /url: https://www.americanexpress.com/fr/protectiondesdonnees
    - text: "Conformément à l’article 9 de la loi n° 2014-344 du 17 mars 2014 relative à la consommation, vous pouvez vous opposer au démarchage téléphonique en vous inscrivant sur la liste Bloctel (www.bloctel.gouv.fr). En cas de difficulté d’accès à internet, l’inscription peut se faire par courrier à : Service Bloctel - 6, rue Nicolas Siret - 10 000 Troyes. Veuillez noter que cette opposition ne s’applique pas aux contrats en cours."
    - img "CARTE GOLD AMERICAN EXPRESS"
    - heading "CARTE GOLD AMERICAN EXPRESS" [level=3]
    - text: LES POINTS CLÉS
    - list:
      - listitem:
        - text: Gratuite la 1
        - superscript: ère
        - text: année *
      - listitem: Amazon Prime remboursé*
      - listitem: Du Cashback au quotidien
      - listitem: Des Assurances optimales
    - text: "*soumis à conditions "
    - link "Vous avez une question?":
      - /url: https://www.americanexpress.com/fr/app-faq-gold-card
    - text: 
    - link "01 47 77 72 30":
      - /url: tel:0147777230
    - list:
      - listitem: Du lundi au vendredi de 9h à 19h
      - listitem: Numéro non surtaxé
- contentinfo:
  - separator
  - heading "Devenir client" [level=2]
  - list:
    - listitem:
      - link "Cartes pour les particuliers":
        - /url: https://www.americanexpress.com/fr/carte-de-paiement/types-cartes/cartes-proprietaires/?inav=fr_sitefooter_allcards
    - listitem:
      - link "Cartes Air France KLM - AMEX":
        - /url: https://www.americanexpress.com/fr/carte-de-paiement/types-cartes/cartes-air-france-klm-amex/?inav=fr_sitefooter_afcards
    - listitem:
      - link "Cartes Business":
        - /url: https://www.americanexpress.com/fr-fr/entreprise/carte-de-paiement/?inav=fr_sitefooter_sbscards
    - listitem:
      - link "Cartes PRO":
        - /url: https://www.americanexpress.com/fr-fr/professionnel/solutions-paiement-entreprises/air-france/?inav=fr_sitefooter_cardspro
    - listitem:
      - link "Cartes Corporate":
        - /url: https://www.americanexpress.com/fr-fr/professionnel/?inav=fr_sitefooter_corpcards
  - heading "Liens utiles" [level=2]
  - list:
    - listitem:
      - link "Carte perdue ou volée":
        - /url: https://www.americanexpress.com/fr/faq/?inav=fr_sitefooter_stolencards
    - listitem:
      - link "Code confidentiel":
        - /url: https://www.americanexpress.com/fr/merchant/help-pin-express-card.html?inav=fr_sitefooter_pin
    - listitem:
      - link "Où utiliser votre carte?":
        - /url: https://www.americanexpress.com/fr-FR/maps?inav=fr_sitefooter_votre_carte
    - listitem:
      - link "Espace commerçants":
        - /url: https://www.americanexpress.com/fr/merchant/?inav=fr_sitefooter_merchants
    - listitem:
      - link "Accepter Amex Cartes":
        - /url: https://www.americanexpress.com/fr/merchant/accepter-la-carte.html?inav=fr_sitefooter_merchants_apply
  - heading "Plus de services" [level=2]
  - list:
    - listitem:
      - link "Vos services sur mobile":
        - /url: https://www.americanexpress.com/fr/benefices/services-securises/services-mobiles/appli-mobile/amex-mobile-app.html?intlink=Footer&inav=fr_sitefooter_app
    - listitem:
      - link "Carte supplémentaire":
        - /url: https://www.americanexpress.com/fr/benefices/carte-supplementaire/?inav=fr_sitefooter_supp
    - listitem:
      - link "Parrainage de carte":
        - /url: https://www.americanexpress.com/fr-fr/referral?inav=fr_sitefooter_mgm
    - listitem:
      - link "Assurances":
        - /url: https://www.americanexpress.com/fr/assurance/?inav=fr_sitefooter_insurance
    - listitem:
      - link "Réseau (en Anglais)":
        - /url: https://network.americanexpress.com/globalnetwork/v4?inav=fr_sitefooter_plus_de_services_reseau
    - listitem:
      - link "FAQs":
        - /url: https://www.americanexpress.com/fr/service-clientele/?inav=fr_sitefooter_faq
  - heading "Informations sur la société" [level=2]
  - list:
    - listitem:
      - link "A propos d'American Express":
        - /url: https://www.americanexpress.com/fr/entreprises/a-propos/?inav=fr_sitefooter_aboutamex
    - listitem:
      - link "Emploi et Carrières":
        - /url: https://www.americanexpress.com/fr-fr/carrieres/?inav=fr_sitefooter_companyinfo_news
    - listitem:
      - link "Espace Presse":
        - /url: https://www.americanexpress.com/fr/entreprises/a-propos/?inav=fr_sitefooter_press#presse
    - listitem:
      - link "Contactez-nous":
        - /url: https://www.americanexpress.com/fr/support/contactez-nous.html?inav=fr_sitefooter_contact_pr
    - listitem:
      - link "Plan du site":
        - /url: https://www.americanexpress.com/fr-fr/plan-du-site/personelles.html?inav=fr_sitefooter_sitemap
  - separator
  - img "American Express"
  - text: France
  - link "Autres pays":
    - /url: https://www.americanexpress.com/en-us/change-country/
  - list:
    - listitem:
      - link "Facebook. Ouvrir le lien dans une nouvelle fenêtre":
        - /url: https://www.facebook.com/AmericanExpressFrance
        - img "Facebook. Ouvrir le lien dans une nouvelle fenêtre"
  - list:
    - listitem:
      - link "Marques déposées":
        - /url: https://www.americanexpress.com/fr/trademarks.html?inav=fr_legalfooter_trademark
      - text: "|"
    - listitem:
      - link "Mentions légales":
        - /url: https://www.americanexpress.com/fr/terms-and-conditions.html?inav=fr_legalfooter_termsofuse
      - text: "|"
    - listitem:
      - link "Centre de confidentialité":
        - /url: https://www.americanexpress.com/fr-fr/societes/legale/centre-de-confidentialite/?inav=fr_footer_centre_de_confidentialite
      - text: "|"
    - listitem:
      - link "Votre Protection":
        - /url: https://www.americanexpress.com/fr/benefices/services-securises/services-anti-fraude/?inav=fr_legalfooter_securityalerts
      - text: "|"
    - listitem:
      - link "Communication Compte inactif":
        - /url: https://www.americanexpress.com/fr/information/communication-compte-inactif.html?inav=fr_legalfooter_comm_inactif
      - text: "|"
    - listitem:
      - link "Gestion des réclamations":
        - /url: https://www.americanexpress.com/fr/legal/reclamations/?inav=fr_legalfooter_comm_inactif
      - text: "|"
    - listitem:
      - link "Services client pour sourds et malentendants":
        - /url: https://www.americanexpress.com/fr/service-clientele/accessible/sourds-et-malentendants.html?inav=fr_legalfooter_accessible
      - text: "|"
    - listitem:
      - link "FX-ECB Comparaison":
        - /url: https://www.americanexpress.com/fr/legal/fx-ecb-comparaison/?inav=fr_legalfooter_accessible_fx_ecb
      - text: "|"
    - listitem:
      - link "Documentation d’Information Tarifaire":
        - /url: https://www.americanexpress.com/fr/documentinformationtarifaire?inav=fr_legalfooter_dit
      - text: "|"
    - listitem:
      - link "Glossaire Documentation d’Information Tarifaire":
        - /url: https://www.americanexpress.com/fr/documentinformationtarifaireglossaire?inav=fr_legalfooter_dit_glossaire
      - text: "|"
    - listitem:
      - link "Politique de gestion des Cookies":
        - /url: https://www.americanexpress.com/fr-fr/societes/legale/centre-de-confidentialite/a-propos-des-Cookies/?inav=fr_legalfooter_cookie_policy
  - paragraph:
    - text: Copyright © 2025
    - link "American Express Company":
      - /url: https://www.americanexpress.com/fr/
```

# Test source

```ts
   1 | const { test, expect } = require('@playwright/test');
   2 |
   3 | test.describe('American Express UI Flow', () => {
   4 |     
   5 |     test('Test User Flow on AMEX Website', async ({ page }) => {
   6 |         
   7 |         // Step 1: Open FR Homepage and click "Cartes American Express"
   8 |         await page.goto('https://www.americanexpress.com/fr-fr/?inav=NavLogo');
   9 |         await page.getByTestId('granular-banner-button-accept-all').click();
  10 |         await page.click('#label-tab-open-cards');
  11 |         // await page.getByTestId('granular-banner-button-accept-all').click();
  12 |         await page.getByRole('link', { name: 'Les Cartes American Express' }).click();
  13 |
  14 |         // Step 2: Open the All Cards page and click on "En Savoir Plus"
  15 |         await page.goto('https://www.americanexpress.com/fr/carte-de-paiement/types-cartes/cartes-proprietaires/?intlink=fr-fr-hp-product1-all-pry_cartes-01032021');
  16 |         await page.waitForLoadState('networkidle');
  17 |         await page.getByTestId('granular-banner-button-accept-all').click();
  18 |         await page.getByRole('link', { name: 'En savoir plus' }).first().click();
  19 |
  20 |
  21 |         // Step 3: Open the Gold Card Description page
  22 |         await page.goto('https://www.americanexpress.com/fr-fr/charge-cards/apply/personal/gold?sourcecode=A0000FE43V&intlink=fr-amex-cardshop-details-apply-GoldCardAmericanExpress-siderailPlease');
  23 |         // await page.waitForLoadState('networkidle');
  24 |         // await page.getByTestId('granular-banner-button-accept-all').click();
  25 |         await page.getByRole('button', { name: 'Documents requis' }).click();
  26 |         await page.locator('div[role="dialog"]').getByText('Demander ma Carte', { exact: true }).click();
  27 |
  28 |
  29 |
  30 |         // Step 4: User details page - fill in junk data and click "Sauvegarder et Continuer"
  31 |         await page.goto('https://www.americanexpress.com/fr-fr/charge-cards/apply/personal/gold?sourcecode=A0000FE43V&intlink=fr-amex-cardshop-details-apply-GoldCardAmericanExpress-siderail');
  32 |         // await page.getByTestId('granular-banner-button-accept-all').click();
  33 |         await page.locator('#fieldControl-input-firstName').click();
  34 |         await page.locator('#fieldControl-input-firstName').fill('Test');
  35 |         await page.locator('#fieldControl-input-lastName').click();
  36 |         await page.locator('#fieldControl-input-lastName').fill('User');
  37 |         // await page.fill('input[name="name"]', 'Test User');
  38 |         // await page.fill('input[name="email"]', 'testuser@test123.com');
  39 |         await page.locator('#fieldControl-input-email').click();
  40 |         await page.locator('#fieldControl-input-email').fill('testuser@test123.com');
  41 |         await page.getByRole('button', { name: 'Sauvegarder et Continuer' }).click();
  42 |
  43 |
  44 |         // Step 5: Validation - Ensure the page navigates correctly
  45 |         const currentUrl = page.url();
> 46 |         expect(currentUrl).toContain('confirmation');  // Adjust this based on the actual expected confirmation URL
     |                            ^ Error: expect(received).toContain(expected) // indexOf
  47 |     });
  48 | });
  49 |
```