class MyStoreScreen{

    get #products(){
        return $('id:products')
    }


    async enterProductsPage(){
        return await this.#products.click()
    }
}

module.exports = new MyStoreScreen()