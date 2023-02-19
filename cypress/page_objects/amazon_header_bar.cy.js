///reference types="Cypress" /> 

class Amazon_main_header{

    NavigationLogoID="#nav-logo"
    SelectYourAdressID = "#nav-global-location-popover-link"
    SearchTextBoxID = "#nav-search-bar-form"
    SearchSubmitBtnID = "#nav-search-submit-button"
    SignInLinkID = "#nav-link-accountList"
    CartLinkID= "#nav-cart-count"



    clickOnShoppingCartLink(){
       return cy.get(this.CartLinkID).click()
    }


    findSearchLine(text){
        return cy.get(this.SearchTextBoxID).type(text)
    }
    
    SubmitButtonToSearch(){
        return cy.get(this.SearchSubmitBtnID)
    }

}
 export default Amazon_main_header