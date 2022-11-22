const { Given, When, Then } = require('@wdio/cucumber-framework');
const LoginPage = require('../pageobjects/login.page');
const CreateAccountPage = require('../pageobjects/createAccount.page');
const AddToCartPage = require('../pageobjects/addToCart.page');
const checkOutPage = require('../pageobjects/checkOut.page');
const addToCartPage = require('../pageobjects/addToCart.page');


//TC-001 Create New user
Given(/^I am on the home page$/, async () => {
    await LoginPage.openHomePage()
});

When(/^I click on create an account$/, async () => {
    await LoginPage.createLink()
});

Then(/^I enter details \"([^\"]*)\" \"([^\"]*)\" \"([^\"]*)\" \"([^\"]*)\" and \"([^\"]*)\"$/, async (FirstName, LastName, Email, Password, PasswordConfirmation) =>{
    await CreateAccountPage.createUser(FirstName,LastName,Email,Password, PasswordConfirmation)
});

Then(/^Verify User is in home page$/, async () => {
    await CreateAccountPage.verifyMyAccount()
    await CreateAccountPage.logout()
});


//TC-002 Login to the account 
When(/^I provide \"([^\"]*)\" and \"([^\"]*)\"$/, async (email, password) => {    
    await LoginPage.login(email, password)
});

Then(/^Verify User is on home page$/, async () => {
    await LoginPage.verifyUser()
});


// TC-003 Select product and Add to Cart
Given(/^I am selecting the category$/, async () => {
    await addToCartPage.selectCategory()
});

When(/^I am choosing the product$/, async () => {
    await addToCartPage.chooseProduct() 
});

Then(/^I select the size and color$/, async () => {
    await addToCartPage.selectSizeAndColor()  
});

Then(/^I click on add to cart$/, async () => {
    await addToCartPage.clickAddToCart()
});


//TC-004 Add address details and checkout the product
Given(/^I am going to cart$/, async () => {
    await checkOutPage.visitCart()
});

When(/^I provide the shipping address$/, async () => {
    await checkOutPage.shippingAddress()
    
});

Then(/^Verify the product and place order$/, async () => {
    await checkOutPage.verifyProduct()
});
