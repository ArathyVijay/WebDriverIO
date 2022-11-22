//import common.page
const Page = require('./common.page');

const expectChai = require('chai').expect
const CreateAccountPage = require('../pageobjects/createAccount.page');
const { expect } = require('chai');



class LoginPage extends Page {
    
     get clickOnCreateAccount() {
        return $('=Create an Account');
    }

    get inputUsername() {
        return $('#username');
    }

    get inputPassword() {
        return $('#password');
    }

    get btnSubmit() {
        return $('button[type="submit"]');
    }

    

    get home() {
        return $('.logo')
    }

    get signIn() {
        return $('a=Sign In')
    }

    get pass() {
        return $('#pass')
    }

    get emailAddress() {
        return $('#email')
    }

    get welcomeName() {
        return $("//div[@class='box-content']/p[contains(text(),'Arathy Demo')]")
    }

    get myAccount() {
        return $('a=My Account')
    }

    get logIn() {
        return $('#send2')
    }
    
 
    //click on create an account
    async createLink() {
        await this.clickOnCreateAccount.click();
    }

    async homePage() {
        await this.home.click();
        const title = await browser.getTitle();
        await console.log(title);
        await expect(browser).toHaveTitleContaining('Home Page');
    }

    //I provide "<email>" and "<password>"
    async login(email, password) {
        await this.signIn.click();
        await this.emailAddress.setValue(email);
        await this.pass.setValue(password);
        await this.logIn.click();

    }

    //Verify User is on home page
    async verifyUser() {
        await browser.pause(3000);
        await CreateAccountPage.dropdown.click();
        await browser.pause(3000);
        await this.myAccount.click();
        const greet = await this.welcomeName.getText();
        await expectChai(greet).to.include(('Arathy Demo'));
    }
    
    //I am on the home page
     openHomePage () {
        super.openHomePage();
        browser.maximizeWindow();
    }
}

module.exports = new LoginPage();

