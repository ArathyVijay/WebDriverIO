//import common.page
const Page = require('./common.page');


class checkOutPage extends Page {
    

  
    get cart() {
        return $(".action.showcart");
    }

    get proceed() {
        return $("//button[@id='top-cart-btn-checkout']");
    }
    

    get addressOne() {
        return $("//input[@name='street[0]']");
    }

    get city() {
        return $('[name="city"]');
    }
    
    get state() {
        return $("select[name='region_id']");
    }

    get postcode() {
        return $("input[name='postcode']");
    }

    get phone() {
        return $("input[name='telephone']");
    }

    get shippingmethodR() {
        return $("input[value='flatrate_flatrate']");
    }

    get next() {
        return $("button[data-role='opc-continue']");
    }
    
    get viewProduct() {
        return $("//div[@class='title']");
    }

    get productname() {
        return $("//strong[@class='product-item-name']");
    }

    get productqty() {
        return $("//div[@class='details-qty']/span[@class='value']");
    }

    get placeOrder() {
        return $("//button[@class='action primary checkout']");
    }

    get addNewAddress(){
        return $("//span[contains(text(),'New Address')]");
    }

    get verifyPurchase(){
        return $('.base');
    } 
    
    // I am moving the product to cart
    async visitCart() {
        await browser.pause(8000);
        // await this.addcart.click();
        await browser.pause(1000);
        await this.cart.click();
        await browser.pause(3000);
        await this.proceed.click();
        await browser.pause(4000);
    }

    //I enter the shipping address
    async shippingAddress() {
        await browser.pause(3000);     
        
        await this.shippingmethodR.click();
        await this.next.click();
        await browser.pause(5000);
    }

    //Verify the product and place order
    async verifyProduct() {
        await browser.pause(5000);
        let l = await $("//div[@class='title']");
        await l.isClickable();
        if(l.getAttribute('aria-expanded')== 'true'){console.log("present already")}
        else{await $("//div[@class='title']").click();}

        await browser.pause(3000);
        const ProductName = await this.productname
        await expect(ProductName).toHaveText('Nadia Elements Shell')
        //console.log("verify success product name")

        const ProductQuantity = await this.productqty
        await expect(ProductQuantity).toHaveText('1')
        //console.log("verify success qty")

        await this.placeOrder.click();
       // console.log("success order")
       await this.verifyPurchase.isClickable();
       const message=await this.verifyPurchase.getText();
       expect(message).toEqual("Checkout");
    }
    



    open () {
        super.open();
        browser.maximizeWindow();
    }
}

module.exports = new checkOutPage();