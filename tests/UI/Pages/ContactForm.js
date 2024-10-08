const {test,expect} = require ('@playwright/test')

exports.ContactForm = class ContactForm {
    constructor (page){
        this.page = page
        this.txtTitle        = page.getByText('Shady Meadows B&B')
        this.txtNameForm     = page.locator('[data-testid="ContactName"]')
        this.txtEmail        = page.locator('[data-testid="ContactEmail"]')
        this.txtPhone        = page.locator('[data-testid="ContactPhone"]')
        this.txtSubject      = page.locator('[data-testid="ContactSubject"]')
        this.txtDescription  = page.getByLabel('Description')
        this.btnSubmit       = page.getByRole('button',{name: ' Submit '})

    }  

        async fillName (Name) {
            await this.txtNameForm.fill(Name)
            }           
        
        async fillEmail (Email) {
            await this.txtEmail.fill(Email)
        }      
        
        async fillPhone (Phone) {
            await this.txtPhone.fill(Phone)
        }           
        
        async fillSubject (Subject) {
            await this.txtSubject.fill(Subject)
        }    
        
        async fillDescrption (Description) {
            await this.txtDescription.fill(Description)
        }    

        
        async clickSubmitBtn () {
            await this.btnSubmit.click()
        } 
      
    }     
    
    /*

    test('Formulario Contacto', async ({ page }) => {
        await page.goto('https://automationintesting.online/');
        await expect(page.getByText('Shady Meadows B&B')).toBeVisible();
        await page.getByPlaceholder('name').fill('Mateo');
        await page.getByPlaceholder('email').fill('luque@gmail.com');
        await page.getByPlaceholder('phone').fill('10701110107');
        await page.getByPlaceholder('subject').fill('Book in Bali');
        await page.getByLabel('description').fill('I would like to book a family room with one double bed and three singles bed for three nights from Saturday 4th November preferably with a see view');
        await page.getByRole("button",{name: " Submit "}).click();
        await expect(page.getByRole('heading', {name: 'Thanks for getting in touch ' })).toBeVisible();  */
