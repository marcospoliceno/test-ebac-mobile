class HomeScreen {
    async goToForms() {
      const selector = '//android.widget.Button[@content-desc="Forms"]';
      const button = $(`${selector}`);
      button.click();
    }
  }
  
  module.exports = new HomeScreen();