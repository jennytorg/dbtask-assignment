/// <reference types="cypress" />

import Amazon_main_menu_tool_bar from '../page_objects/navigation_tool_bar.cy'

describe('validate page "Track your package" open in new tab from "Costumers Service" page',()=>{
    
    const nav_bar= new Amazon_main_menu_tool_bar()

    before(()=>{
        cy.openAmazonSite()
    })

    it('open amazon site and validate HP displays', ()=>{
       // cy.openAmazonSite()
        const nav_bar= new Amazon_main_menu_tool_bar()
        //verify the title of the tab in home page
        cy.title().should('eq','Amazon.com. Spend less. Smile more.')

        //verify the main menu tab id exist
       
        
        nav_bar.findToolBarInTheHeader().should('exist')

    })
    //debugger

    it('click on customer service link in the bar validate ',{defaultCommandTimeout:6000},()=>{

       nav_bar.clickOnCustomerService()
    })

    it('validate the page Customer Service open',()=>{
        cy.get("h1[class='fs-heading bolded']").should('have.text','Welcome to Amazon Customer Service')

        cy.title().should('include','Amazon Customer Service Support')

     })
     

    it('click on "where is my stuff" link ',()=>{
        cy.get('#foresight-help-topic-1').click()
        //cy.get('#foresight-help-topic-1').scrollIntoView().should('be.visible')
        // cy.get('#foresight-help-topic-1') //find the link text "where is my stuff"
        //     .scrollIntoView({
        //         easing:'linear',
        //         duration:4000,
        //         offset:{top:10,left:0}
        //     }).click() //clicks on link "where is my stuff" 
        })
        

    it('click on button "Track Your package" link - to open page "Track Your Package" in same tab',()=>{
        

        cy.xpath('//*[@id="hub-gateway-app-unauth"]/div[2]/div/div/div[2]/div[2]/div[1]/div').scrollIntoView()
        .invoke('attr','href').then(mylink=>{
            cy.visit('https://www.amazon.com/gp/help/customer/display.html/?nodeId=GENAFPTNLHV7ZACW')
        })
       
    })
    
       
    it('verify the page "Track Your Package" opened in the new tab ',()=>{
        cy.wait(2000)
        cy.title().should('include','Track Your Package')

        //in the left menu the text 'Track Your package' should be selcted as bold
        cy.get('li[class="selected"]').should('have.class', 'selected')
        
        //the page need to have search input field 
        cy.get('#helpsearch').should('be.visible')

        //verity there are first section include text : Go to Your Orders.
        cy.get('#GUID-AEBE3FF9-5AAF-4CD6-AF09-0287157B72C3__STEP_BCD087C1943B4819B0D24B10F57E574D')
        .should('contain', 'Go to Your Orders.')
    })
        
    

})