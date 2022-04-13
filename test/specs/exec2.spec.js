const mystoreScreen = require('../screens/mystore.screen')
const homeScreen = require('../screens/home.screen')
const loginScreen = require('../screens/login.screen')
const productsScreen = require('../screens/product.screen')

describe('Testes exercicios modulo2 ebac-mobile', () => {

    it('Deve verificar o label ao acessar a pagina de Login ', async () =>{
        await homeScreen.goToLogin()        
        expect(await loginScreen.getLabelText()).toEqual("Enter the address of the WooCommerce store you'd like to connect.")
    })

    it('Should request e-mail to login', async () =>{
        await loginScreen.enterSiteAddress('http://lojaebac.ebaconline.art.br/')
        expect(await loginScreen.getInputText()).toEqual('Email address')
    })

    it('Should login with valid credencials', async () =>{
    await loginScreen.enterAccessCredencials('testaebac@gmail.com', '$*Teste123')
        expect(await loginScreen.getLabelText()).toEqual('Almost there! We just need to verify your Jetpack connected email address testaebac@gmail.com')
    })

    it('Should enter on add new products page', async () =>{
        await mystoreScreen.enterProductsPage()
        await productsScreen.setProductTitle("abominable-hoodie")
        expect(await productsScreen.getScreenTitle()).toEqual("abominable-hoodie")
    
    })
})