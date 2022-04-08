const homeScreen = require('../screens/home.screen');
const formScreen = require('../screens/form.screen');

describe('Access Admin Panel', () => {
  it('should login with valid credentials', async () => {
    await homeScreen.goToForms();
    await formScreen.waitForIsShown(true);
    await formScreen.fillForms();
  });
});