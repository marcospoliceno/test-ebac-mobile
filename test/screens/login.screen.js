class LoginScreen{


    async enterAccessCredencials(user, password){
        await this.#loginSiteCreds.click()
        await this.#username.setValue(user)
        await this.#password.setValue(password)
        await this.#continueButton.click()
    }

  
}

module.exports = new LoginScreen()