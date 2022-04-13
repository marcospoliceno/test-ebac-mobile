class HomeScreen {
  async goToForms() {
    const selector = '//android.widget.Button[@content-desc="Forms"]';
    const button = $(`${selector}`);
    button.click();
  }


  get #enterStoreAddress() {
    return $('id:button_login_store')
  }

  async goToLogin() {
    await this.#enterStoreAddress.click()
  }
}

module.exports = new HomeScreen();