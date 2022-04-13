class ProductsScreen {

    get #productTitle() {
        return $('id:cardsRecyclerView')
            .$('android=new UiSelector().className("androidx.cardview.widget.CardView").index(0)')
            .$('id:cardContainerView')
            .$('id:propertiesRecyclerView')
            .$('android=new UiSelector().className("android.view.ViewGroup").index(0)')
            .$('id:editText')
    }
    get #screenTitle() {
        return $('id:toolbar')
            .$('android=new UiSelector().className("android.widget.TextView").index(1)')
    }
    async setProductTitle(productTitle) {
        await this.#productTitle.setValue(productTitle)
    }
    async getScreenTitle() {
        return await this.#screenTitle.getText()
    }
}

module.exports = new ProductsScreen()