const { test, expect } = require('@playwright/test');

test.describe('Activity',() => {
    test('Reserva de Habitación', async ({ page }) => {
        await page.goto('https://automationintesting.online/');
        await expect(page.getByText('Welcome to Restful Booker Platform')).toBeVisible();
        await expect(page.getByText('Your one stop shop to practise Software Testing!')).toBeVisible();
        await page.getByRole("button",{name: " Let me hack "}).click();
        await expect(page.getByAltText('Hotel logoUrl')).toBeVisible();
        await expect(page.locator('#footer')).toBeVisible();
        await page.getByRole("button",{name: " Book this room "}).click();
        await expect(page.getByText('single')).toBeVisible();
        await page.getByRole("button",{name: " Today "}).click();
        await page.getByRole("button",{name: " Back "}).click();
        await page.getByRole("button",{name: " Next "}).click();       
        await page.getByRole("table",{name: " Month View "}).hover();
        

        await page.locator('div:nth-child(3) > .rbc-row-bg > div:nth-child(2)').hover();
        await page.mouse.down();
        await page.locator('div:nth-child(3) > .rbc-row-bg > div:nth-child(5)').hover();
        await page.mouse.up();

        await page.getByPlaceholder('firstname').fill('Mateo');
        await page.getByPlaceholder('lastname').fill('Luque');
        await page.locator('input[name="email"]').fill('luque@gmail.com');
        await page.locator('input[name="phone"]').fill('107011101');
        await page.getByRole("button",{name: " Book "}).click();
        /*await expect(page.getByText('Booking Successful! Congratulations! Your booking has been confirmed for:')).toBeVisible();*/
        /*await expect(page.getByRole('heading', {name: 'Booking Successful! Congratulations! Your booking has been confirmed for: ' })).toBeVisible();*/
       
        
    });

    test('Formulario Contacto', async ({ page }) => {
        await page.goto('https://automationintesting.online/');
        await expect(page.getByText('Shady Meadows B&B')).toBeVisible();
        await page.getByPlaceholder('name').fill('Mateo');
        await page.getByPlaceholder('email').fill('luque@gmail.com');
        await page.getByPlaceholder('phone').fill('10701110107');
        await page.getByPlaceholder('subject').fill('Book in Bali');
        await page.getByLabel('description').fill('I would like to book a family room with one double bed and three singles bed for three nights from Saturday 4th November preferably with a see view');
        await page.getByRole("button",{name: " Submit "}).click();
        await expect(page.getByRole('heading', {name: 'Thanks for getting in touch ' })).toBeVisible();
        
        /*await page.click('#submitContact');
        await page.click('text = Submit')*/
        

    });

} );
