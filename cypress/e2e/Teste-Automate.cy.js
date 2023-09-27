describe('TesteAutomatizare', () => {


    // Testul numarul 1
    it('Login cu username / password corecte', () => {
        cy.visit('https://www.saucedemo.com/');
        cy.get('[data-test="username"]').type('standard_user');
        cy.get('[data-test="password"]').type('secret_sauce');
        cy.get('#login-button').click();
        cy.get('#react-burger-menu-btn').click();
        cy.get('#logout_sidebar_link').should('exist');
    })
    

    // Testul numarul 2
    it('Login cu username / password gresite', () => {
        cy.visit('https://www.saucedemo.com/');
        cy.get('#user-name').type('abcdefg');
        cy.get('#password').type('123456');
        cy.get('#login-button').click();
        cy.get('[data-test="error"]').should('exist');
    })

    // Testul numarul 3
    it('Verificare logout', () => {
        cy.visit('https://www.saucedemo.com/');
        cy.get('[data-test="username"]').type('standard_user');
        cy.get('[data-test="password"]').type('secret_sauce');
        cy.get('#login-button').click();
        cy.get('#react-burger-menu-btn').click();
        cy.get('#logout_sidebar_link').click();
        cy.get('[data-test="login-button"]').should('be.visible');
    })

    // Testul numarul 4
    it('Verificare deschidere / inchidere meniu lateral', () => {
        cy.visit('https://www.saucedemo.com/');
        cy.get('[data-test="username"]').type('standard_user');
        cy.get('[data-test="password"]').type('secret_sauce');
        cy.get('#login-button').click();
        cy.get('#react-burger-menu-btn').click();
        cy.get('#inventory_sidebar_link').should('exist');
        cy.get('#react-burger-cross-btn').click();
        cy.get('#react-burger-menu-btn').should('be.visible');
    })

    // Testul numarul 5
    it('Verificare functionalitate "Add to cart"', () => {
        cy.visit('https://www.saucedemo.com/');
        cy.get('[data-test="username"]').type('standard_user');
        cy.get('[data-test="password"]').type('secret_sauce');
        cy.get('#login-button').click();
        cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click();
        cy.get('.shopping_cart_link').click();
        cy.get('.inventory_item_name').should('exist');
    })

    // Testul numarul 6
    it('Verificare comandare produs', () => {
        cy.visit('https://www.saucedemo.com/');
        cy.get('[data-test="username"]').type('standard_user');
        cy.get('[data-test="password"]').type('secret_sauce');
        cy.get('#login-button').click();
        cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click();
        cy.get('.shopping_cart_link').click();
        cy.get('[data-test="checkout"]').click();
        cy.get('[data-test="firstName"]').type('AAAAAA');
        cy.get('[data-test="lastName"]').type('BBBBBB');
        cy.get('[data-test="postalCode"]').type('123456');
        cy.get('[data-test="continue"]').click();
        cy.get('[data-test="finish"]').click();
        cy.get('[data-test="back-to-products"]').click();
        cy.get('.title').should('be.visible');
    })

    // Testul numarul 7
    it('Verificare pagina de descriere a produselor', () => {
        cy.visit('https://www.saucedemo.com/');
        cy.get('[data-test="username"]').type('standard_user');
        cy.get('[data-test="password"]').type('secret_sauce');
        cy.get('#login-button').click();
        cy.get('#item_5_title_link > .inventory_item_name').click();
        cy.get('[data-test="back-to-products"]').should('be.visible');
    })

    // Testul numarul 8
    it('Verificare buton "Back to products"', () => {
        cy.visit('https://www.saucedemo.com/');
        cy.get('[data-test="username"]').type('standard_user');
        cy.get('[data-test="password"]').type('secret_sauce');
        cy.get('#login-button').click();
        cy.get('#item_5_title_link > .inventory_item_name').click();
        cy.get('[data-test="back-to-products"]').click();
        cy.get('.title').should('be.visible');
     })


})

    