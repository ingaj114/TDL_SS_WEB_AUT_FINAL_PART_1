import BasePage from "./Base.page";

class LoginPage extends BasePage {
  static get url() {
    return "/";
  }

  static get loginPass() {
    return cy.get("[placeholder='Username']");
  }

  static get passwordPass() {
    return cy.get("[placeholder='Password']");
  }

  static get validate() {
    return cy.get("[data-test='error']");
  }
  
  static get item() {
    return cy.get("[class='inventory_item']")
  }


}

export default LoginPage;
