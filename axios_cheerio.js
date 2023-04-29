const axios = require('axios')
const cheerio = require('cheerio')

Scraper('https://www.amazon.com.br/PlayStation%C2%AE5-God-of-War-Ragnar%C3%B6k/dp/B0BLW5C5KN/ref=sr_1_2?keywords=ps5&sr=8-2&ufe=app_do%3Aamzn1.fos.25548f35-0de7-44b3-b28e-0f56f3f96147')
// Scraper('https://www.amazon.com.br/Algod%C3%A3o-Costura-Zorba-Masculino-Marinho/dp/B09L9CP9FY/ref=sr_1_5?keywords=cueca%2Bboxer&sr=8-5&ufe=app_do%3Aamzn1.fos.db68964d-7c0e-4bb2-a95c-e5cb9e32eb12&th=1&psc=1')


const product = {
    name: '',
    price: '',
    image: '',
}

async function Scraper(url) {
    const { data } = await axios.get(url)
    const $ = cheerio.load(data)
    const item = $('div#dp')

    product.name = $(item).find('h1 span#productTitle').text()
    product.price = $(item).find('span .a-price-whole').first().text()
    product.image = $(item).find('img#landingImage').attr('src')
    
    console.log(product.name)
    console.log(product.price)
    console.log(product.image)   
}