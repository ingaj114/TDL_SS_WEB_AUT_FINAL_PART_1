import HomePage from "../pageObjects/Home.page";
import LoginPage from "../pageObjects/Login.page";

describe("Swag Labs", () => {
  context("Login page scenarios", () => {
    beforeEach(() => {
      LoginPage.visit();
    });
    it("1. Login with locked_out_user", () => {
      LoginPage.loginPass.type("locked_out_user");
      LoginPage.passwordPass.type("random_123{enter}");
      // LoginPage.validate.should("contain", "Epic sadface: Sorry, this user has been locked out");
      LoginPage.validate.should("contain", "Epic sadface: Username and password do not match any user in this service");
    });
    it("2. Login with wrong password", () => {
      LoginPage.loginPass.type("standard_user");
      LoginPage.passwordPass.type("random_123{enter}");
      LoginPage.validate.should("contain", "Epic sadface: Username and password do not match any user in this service");    
    });
    it("3. Login and valide item count", () => {
      LoginPage.loginPass.type("standard_user");
      LoginPage.passwordPass.type("secret_sauce{enter}");
      LoginPage.item.should("have.length", 6);    
    });
  });
  
  context("Home page scenarios", () => {
    beforeEach(() => {
      LoginPage.visit();
      LoginPage.loginPass.type("standard_user");
      LoginPage.passwordPass.type("secret_sauce{enter}");
    });
    it("4. Sort high to low and validate first item", () => {
      HomePage.sort.select("Price (high to low)");
      HomePage.validateItem.should("contain", "Sauce Labs Fleece Jacket");
      HomePage.validatePrice.should("contain", "$49.99");
    });
    it("5. Sort low to high and validate first item", () => {
      HomePage.sort.select("Price (low to high)");
      HomePage.validateItem.first("Sauce Labs Onesie");
      HomePage.validatePrice.first("$7.99");
    });
    it("6. Sort Z to A and validate first item", () => {
      HomePage.sort.select("Name (Z to A)");
      HomePage.validateItem.first("Test.allTheThings() T-Shirt (Red)");
    });
    it("7. Validate shopping cart badge amount", () => {
      HomePage.backpack.click();
      HomePage.backpackToCart.click();
      HomePage.icon.should("contain", "1");
      HomePage.back.click();
      HomePage.bikeLight.click();
      HomePage.bikeLightToCart.click();
      HomePage.icon.should("contain", "2");
    });
    it("8. Reset app state", () => {
      HomePage.tshirt.click();
      HomePage.tshirtToCart.click();
      HomePage.icon.should("contain", "1");
      HomePage.burger.click();
      HomePage.reset.click();
      HomePage.icon.should("not.exist");      
    });
    it("9. Validate shopping cart remove button functionality", () => {
      HomePage.bolt.click();
      HomePage.boltAddToCart.click();
      HomePage.icon.should("contain", "1");
      HomePage.remove.click();
      HomePage.icon.should("not.exist");      
    });
    it("10. Buy a t-shirt", () => {
      HomePage.tshirt.click();
      HomePage.tshirtToCart.click();
      HomePage.cart.click();
      HomePage.checkout.click();
      HomePage.firstName.type("test__first_name");
      HomePage.lastName.type("test_last_name");
      HomePage.postalCode.type("25697");
      HomePage.continue.click();
      HomePage.validateItem.should("contain", "Test.allTheThings() T-Shirt (Red)");
      HomePage.finish.click();
      HomePage.orderText.should("contain", "THANK YOU FOR YOUR ORDER");
    });
  });

});
