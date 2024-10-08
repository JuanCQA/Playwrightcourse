const { test, expect } = require('@playwright/test');
import dotenv from 'dotenv'
dotenv.config ()

test.describe('Api PetStore',() => {
    test(' 1 - Create a PET', async ({ request }) => {
        const response = await request.get(process.env.BASEURL,'petstore.swagger.io/v2')
        expect(response.status()).toBe(200);
    })

test(' 2 - GET', async ({ request }) => {
    const response = await request.get(process.env.BASEURL,'petstore.swagger.io/v2')
    expect(response.status()).toBe(200);
    })
}) 



    
 