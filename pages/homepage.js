let homepage = function () {

    let firtNumber_input = element(by.model('first'));
    let secondNumber_input = element(by.model('second'));
    let goButton = element(by.css('[ng-click="doAddition()"]'));

    this.get = function (url) {
        browser.get(url);
    }
    this.enterFirstNumber = function (fNumber) {
        firtNumber_input.sendKeys(fNumber);
    }
    this.enterSecondNumber = function (sNumber) {
        secondNumber_input.sendKeys(sNumber);
    }
    this.clickGo = function () {
        goButton.click();
    }
    this.verifyResult = function (result) {
        let output = element(by.cssContainingText('.ng-binding', result));
        expect(output.getText()).toEqual(result);
    }
}
module.exports = new homepage();
