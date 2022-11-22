//import common.page
const Page = require('./common.page');


class AddToCartPage extends Page {
    get women() {
        return $('#ui-id-4');
    }

    get tops() {
        return $('#ui-id-9');
    }


    get jackets() {
        return $('#ui-id-11');
    }

    get jacket() {
        return $("//a[contains(text(),'Nadia Elements Shell')]");
    }

    get size() {
        return $("(//div[@id='option-label-size-143-item-167'])");
    }

    get color() {
        return $("//div[@role='listbox']/div[@aria-label='Black']");
    }


    get addtocart() {
        return $('#product-addtocart-button');
    }

    get myCart() {
        return $("//a[@class='action showcart']");
    }

    get removeItem() {
        return $("//a[@title='Remove item']");
    }

    get acceptCartRemove() {
        return $("button[class='action-primary action-accept'] span");
    }

    get home() {
        return $('.logo');
    }

    get counterNumber() {
        return $("//span[@class='counter-number']");
    }
    //I am selecting the category
    async selectCategory() {
        const counter = await this.counterNumber.getText();
        if (counter != 0) {
            await this.myCart.click()
            await this.removeItem.click();
            await this.acceptCartRemove.click();
            await this.home.click();
        }
        await this.women.moveTo();
        await this.tops.moveTo();
        await this.jackets.click();
    }

    //I am choosing the  product
    async chooseProduct() {
        await this.jacket.click();
    }

    //I am selecting the size and color
    async selectSizeAndColor() {
        await this.size.click();
        await this.color.click();
        await browser.pause(1000)
    }

    // I am clicking on add to cart
    async clickAddToCart() {
        // await this.addcart.click();
        await this.addtocart.click();
    }





    open() {
        super.open();
        browser.maximizeWindow();
    }
}

module.exports = new AddToCartPage();

