/// <reference types="cypress" />


describe('adding items to the shopping cart ',()=>{
    
//open the site custom command 
    before(()=>{
        cy.clearAllCookies() //to empty the cart
        cy.openAmazonSite()
    })

    
//todo - include this function that get any txt paramenter in the custom command, use for different tests suits
   it('find the search line, input text and search for product ', ()=>{

         
        cy.get('#nav-search-bar-form')
        .type("Bostitch Personal Electric Pencil Sharpener, Powerful Stall-Free Motor, High Capacity Shavings Tray,Blue (EPS4-BLUE)")

        cy.get('#nav-search-submit-button').click()

    })

    it('click on the spesific  item from the grid',()=>{
        
        cy.contains('Bostitch Personal Electric Pencil Sharpener, Powerful Stall-Free Motor, High Capacity Shavings Tray, Blue (EPS4-BLUE)')
        .click()

        //verify the item page open 
        cy.get('#productTitle').should('contain','Bostitch Personal Electric Pencil Sharpener')

    })

     //verify #attachDisplayAddBaseAlert confirmation appear in the side bar cart
    it('click add to cart and verity confirmation appears in the side bar cart ',()=>{
        cy.ClickAddToCart()
        cy.get('#attachDisplayAddBaseAlert').should("contain","Added to Cart")
    })


    it('navigate to another item by url, choose color "Yellow, Grey, Blue" and click add to cart',()=>{
        cy.visit('https://www.amazon.com/Scissors-iBayam-Crafting-Scrapbooking-Knitting/dp/B07H3QKN2Z')
        cy.get('#productTitle').should('contain','Scissors, iBayam 8')

        //choose color 

        cy.get('img[alt="Yellow, Grey, Blue"]').click()
        cy.wait(2000)
        cy.get('#variation_color_name > div > span').should('contain','Yellow, Grey, Blue')

    })

    it('click add to cart button and verity msg page "Added to Cart"',()=>{
        //call costume command - usefull for several tests
        cy.ClickAddToCart()
        cy.checkIfConfirmMsgAppears()
    })  

    
    it('navigate to another item # 2 and add to cart',()=>{
        cy.visit('https://www.amazon.com/dp/B09Y8X3DKM/ref=sspa_dk_detail_2?psc=1&pd_rd_i=B09Y8X3DKM&pd_rd_w=VbU5y&content-id=amzn1.sym.dd2c6db7-6626-466d-bf04-9570e69a7df0&pf_rd_p=dd2c6db7-6626-466d-bf04-9570e69a7df0&pf_rd_r=GXBC074GX99XZSFNNVCF&pd_rd_wg=DrvMF&pd_rd_r=d1d55c50-9bdf-4da9-8d2b-4377427ede78&s=office-products&sp_csd=d2lkZ2V0TmFtZT1zcF9kZXRhaWxfdGhlbWF0aWM&spLa=ZW5jcnlwdGVkUXVhbGlmaWVyPUFNUlZRSUtMMk9MSlMmZW5jcnlwdGVkSWQ9QTAzNjM3ODUyU1lLSkpTOVdFRFlRJmVuY3J5cHRlZEFkSWQ9QTA0MTQ1MDAyNTRCQVpDM1IxRElVJndpZGdldE5hbWU9c3BfZGV0YWlsX3RoZW1hdGljJmFjdGlvbj1jbGlja1JlZGlyZWN0JmRvTm90TG9nQ2xpY2s9dHJ1ZQ==#customerReviews')
        cy.get('#productTitle').should('contain','NCUE Premium Sewing Scissors')
    })

    it('click add to cart button and verity msg page "Added to Cart"',()=>{
        //this should be a costum command 'click Add to card and verify text 'Added to Cart' ' 
        cy.ClickAddToCart()
        cy.checkIfConfirmMsgAppears()
    })

    //shold be costum command to check out to my card
    it('check out the cart and varify subtotal have 3 items NO free shipping ',()=>{
        //cy.get('#nav-cart-count').click()
        cy.ClickToSeeMyCartList()

        //subtotal text should have (3 items), items were added earliar
        cy.get('#sc-subtotal-label-buybox').should('contain', '3 items')

        //card view form should contain text 'your Cart are not eligible for FREE Shipping'
        cy.get(".a-alert-content").should('contain','your Cart are not eligible for FREE Shipping')
    })

    it('add another item # 3 that cost more to earn free shipping',()=>{
        cy.visit('https://www.amazon.com/Sharpener-Teacher-Electric-SafeStart-SmartStop/dp/B086PJ4BY1/ref=sr_1_1?crid=1ZUQXJ7X774TT&keywords=%E2%80%9CBostitch+Personal+Electric+Pencil+Sharpener%2C+Powerful+Stall-Free+Motor%2C+High+Capacity+Shavings+Tray%2C+Blue+%28EPS4-BLUE%29%E2%80%9D&qid=1676669195&refinements=p_36%3A1253554011&rnid=386479011&s=office-products&sprefix=bostitch+personal+electric+pencil+sharpener%2C+powerful+stall-free+motor%2C+high+capacity+shavings+tray%2C+blue+eps4-blue+%2Caps%2C420&sr=1-1')
        cy.get('#productTitle').should('contain','X-Acto® TeacherPro®')

    })

    it('click add to cart button and verity msg page "Added to Cart"',()=>{
        cy.ClickAddToCart()
        cy.checkIfConfirmMsgAppears()
    })

    it('check out the cart and varify subtotal text have free shipping',()=>{
        cy.ClickToSeeMyCartList()

        cy.get(".a-alert-content").should('contain','qualifies for FREE Shipping.')

    })

    


})