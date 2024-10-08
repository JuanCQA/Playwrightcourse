const {test,expect} = require ('@playwright/test')

exports.RoomReservation = class RoomReservation {
    constructor (page){
        this.page = page
        this.logoHotel      = page.getByAltText('Hotel logoUrl')
        this.btnBookroom    = page.getByRole('button',{name: ' Book this room '}) 
        this.lblFooter      = page.locator('#footer')
        this.lblSingle      = page.getByText('single')
        this.btnToday       = page.getByRole('button',{name: ' Today '})
        this.btnBack        = page.getByRole('button',{name: ' Back '})
        this.btnNext        = page.getByRole('button',{name: ' Next '})
        this.tblView        = page.getByRole('table',{name: ' Month View '})
        this.lcDown         = page.locator('div:nth-child(3) > .rbc-row-bg > div:nth-child(2)')
        this.lcUp           = page.locator('div:nth-child(3) > .rbc-row-bg > div:nth-child(5)')

        this.txtFirstName   = page.getByPlaceholder('Firstname')
        this.txtLastName    = page.getByPlaceholder('Lastname')
        this.txtEmail       = page.locator('input[name="email"]')
        this.txtPhone       = page.locator('input[name="phone"]')
        this.btnBook        = page.getByRole('button',{name: 'Book '})
        
    } 
    
    async assertBookroom () {
        await expect (this.logoHotel).toBeVisible() 
        await expect (this.lblFooter).toBeVisible() 
        await expect (this.lblSingle).toBeVisible()
        await this.btnBookroom.click();
          
       }     
        async clickbtnBookroom () {
          await this.btnBookroom.click();
        } 

    
    async MonthView ( )  {
        await this.btnToday.click() 
        await this.btnBack.click()
        await this.btnNext.click()
        await this.lcDown.hover()
        await this.page.mouse.down()
        await this.lcUp.hover()
        await this.page.mouse.up()
        }

    async fillFirstname (Firstname) {
        await this.txtFirstName.fill(Firstname)
        }           
    
    async fillLastname (Lastname) {
        await this.txtLastName.fill(Lastname)
    }      
    
    async fillEmail (email) {
        await this.txtEmail.fill(email)
    }           
    
    async fillPhone (phone) {
        await this.txtPhone.fill(phone)
    }    
    
    async clickBookBtn () {
        await this.btnBook.click();
    } 
             
}      
  


/*
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
*/


