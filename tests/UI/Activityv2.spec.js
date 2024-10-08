const { test, expect } = require('@playwright/test');
const {Home} = require('./Pages/Home')
const {RoomReservation} = require('./Pages/RoomReservation')
const {ContactForm} = require('./Pages/ContactForm')

test.describe('Playwright Activity',()=>{
    test('Room reservation', async ({page}) => {
        await page.goto('https://automationintesting.online/')  

        await test.step('Navigate To Book', async () =>{           
            const home = new Home(page)
            await home.navigateToBook()
            
        })
        await test.step('Book room' , async () =>{
            const roomreservation = new RoomReservation(page)
            await roomreservation.clickBookBtn()
            await roomreservation.MonthView()
            await roomreservation.fillFirstname ('Firstname')
            await roomreservation.fillLastname('Lastname')
            await roomreservation.fillEmail('Email')
            await roomreservation.fillPhone('Phone')
            await roomreservation.clickBookBtn()
        })

        await test.step('Contact form' , async () =>{
              const contactform = new ContactForm(page)
              await contactform.fillName ('nameform')
              await contactform.fillEmail('email')
              await contactform.fillPhone('phone')
              await contactform.fillSubject('subject')
              await contactform.fillDescrption('description')
              await contactform.clickSubmitBtn()
        })
            
    })  
})



