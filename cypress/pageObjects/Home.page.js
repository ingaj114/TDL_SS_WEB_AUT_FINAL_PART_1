import BasePage from "./Base.page";

class HomePage extends BasePage {
  static get url() {
    return "/inventory.html";
  }

  static get sort() {
    return cy.get(".product_sort_container");
  }

  static get validateItem() {
    return cy.get(".inventory_item_name");
  }

  static get validatePrice() {
    return cy.get(".inventory_item_price");
  }

  static get backpack() {
    return cy.get("#item_4_img_link");
  }

  static get backpackToCart() {
    return cy.get("#add-to-cart-sauce-labs-backpack");
  }

  static get icon() {
    return cy.get(".shopping_cart_badge");
  }

  static get back() {
    return cy.get("#back-to-products");
  }

  static get bikeLight() {
    return cy.get("#item_0_img_link");
  }  
  
  static get bikeLightToCart() {
    return cy.get("#add-to-cart-sauce-labs-bike-light");
  }

  static get tshirt() {
    return cy.get("#item_3_img_link");
  }

  static get tshirtToCart() {
    return cy.get(".btn_inventory");
  }

  static get burger() {
    return cy.get("#react-burger-menu-btn")
  }

  static get reset() {
    return cy.get("#reset_sidebar_link")
  }

  static get bolt() {
    return cy.get("#item_1_img_link");
  }  

  static get boltAddToCart() {
    return cy.get("#add-to-cart-sauce-labs-bolt-t-shirt");
  }
  
  static get remove() {
    return cy.get("#remove-sauce-labs-bolt-t-shirt");
  }

  static get cart() {
    return cy.get(".shopping_cart_link");
  }

  static get checkout() {
    return cy.get("#checkout")
  }

  static get firstName() {
    return cy.get("[placeholder='First Name']")
  }

  static get lastName() {
    return cy.get("[placeholder='Last Name']")
  }

  static get postalCode() {
    return cy.get("[placeholder='Zip/Postal Code']")
  }

  static get continue() {
    return cy.get("#continue")
  }

  static get finish() {
    return cy.get("#finish")
  }

  static get orderText() {
    return cy.get("#checkout_complete_container");
  }
  
}

export default HomePage;
