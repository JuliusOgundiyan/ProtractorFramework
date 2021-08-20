let homepage = require('../pages/homepage');

describe('demo calculator tests', function () {

    it('addition test', function () {

        homepage.get('http://juliemr.github.io/protractor-demo/');

        homepage.enterFirstNumber('4');

        homepage.enterSecondNumber('6');

        homepage.clickGo();

        homepage.verifyResult('10');

        browser.sleep(3000);

    })
    it('subtraction test', function () {

        homepage.get('http://juliemr.github.io/protractor-demo/');

        homepage.enterFirstNumber('4');

        homepage.enterSecondNumber('6');

        homepage.clickGo1();

        homepage.verifyResult('10');

        browser.sleep(5000);

    })
});