
//import common.page
const Page = require('./common.page');


class SecurePage extends Page {
    get flashAlert () {
        return $('#flash');
    }
}

module.exports = new SecurePage();