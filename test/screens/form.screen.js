class FormScreen {
    waitForIsShown(isShown = true) {
      return $('~Forms').waitForDisplayed({
        timeout: 100000,
        reverse: !isShown,
      });
    }
    async fillForms() {
      const textInput = $('~text-input');
      await textInput.setValue('Input text');
  
      const check = $('~switch');
      await check.click();
  
      const drop = $('~select-Dropdown');
      await drop.click();
  
      const inactive = $('~button-Inactive');
      await inactive.click();
    }
  }
  
  module.exports = new FormScreen();