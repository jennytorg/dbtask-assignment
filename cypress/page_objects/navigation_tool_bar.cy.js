///reference types="Cypress" /> 

class Amazon_main_menu_tool_bar{

    HamburgerMenuID="#nav-hamburger-menu"
    ToolBarID = "#nav-xshop"
    CustomerServiceCSS = "div[id='nav-xshop'] a[data-csa-c-content-id='nav_cs_customerservice']"
    //CustomerServiceCSS = 'Customer Service'
    //"#nav-xshop a:nth-child(3)"



    findToolBarInTheHeader(){
       return cy.get(this.ToolBarID)
        
    }

    clickOnCustomerService(){
       return cy.get(this.CustomerServiceCSS).click()

    } 

}
 export default Amazon_main_menu_tool_bar