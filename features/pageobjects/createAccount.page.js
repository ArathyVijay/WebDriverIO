
 //import common.page
 const Page = require('./common.page');

 class CreateAccountPage extends Page {
 
     get firstName () {
         return $('#firstname');
     }
 
     get lastName () {
         return $('#lastname');
     }
 
     get email() {
         return $('#email_address');
     }
 
     get password() {
         return $('#password');
     }
 
     get passwordConfirmation() {
         return $('#password-confirmation');
     }
     
 
     get btnSubmit () {
         return $('.submit');
     }
 
     get myAccount() {
         return $('.base');
     }
    
     get dropdown() {
         return $('.switch');
     }
  
     get signOut() {
         return $('a=Sign Out');
     }
 
    // I provide information "<FirstName>" "<LastName>" "<Email>" "<Password>" and "<PasswordConfirmation>"
    async createUser(FirstName,LastName,Email,Password,PasswordConfirmation) {
        await this.firstName.setValue(FirstName);
        await this.lastName.setValue(LastName);
        var num=Math.random().toString(36).substring(2,7);
        const myArray=Email.split("@");
        const newEmail=myArray[0]+num+"@"+myArray[1];
        console.log("email generated:-------"+newEmail)
        await this.email.setValue(newEmail);
        await this.password.setValue(Password);
        await this.passwordConfirmation.setValue(PasswordConfirmation);
        await this.btnSubmit.click();
    }
 
     //Verify User in home page
     async verifyMyAccount() {
       await $('.base').isDisplayed()
     }
 
     //Verify User in home page
     async logout() {
         await this.dropdown.click();
         await this.signOut.click();
     }
    
     
     open () {
         return super.open();
     }
 }
 
 module.exports = new CreateAccountPage();