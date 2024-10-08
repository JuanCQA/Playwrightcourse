const { test, expect } = require('@playwright/test');


 exports.Home = class Home{
    constructor (page) {
        this.page = page;
        this.logoHome = page.getByText('Welcome to Restful Booker Platform')
        this.logoPage = page.getByText('Your one stop shop to practise Software Testing!')
        this.btnHack  = page.getByRole('button',{name: ' Let me hack! '})
               
    } 

    async navigateToBook() {
      await expect(this.logoHome).toBeVisible()
      await expect(this.logoPage).toBeVisible ()
      await this.btnHack.click()
    } 
}    
    