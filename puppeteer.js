const puppeteer = require('puppeteer');

async function scrapeProduct(url) {
  const browser = await puppeteer.launch({
    headless: 'new'
  });
  const page = await browser.newPage();
  await page.goto(url);

  const product = await page.evaluate(() => {
    const item = document.querySelector('div#dp');
    return {
      name: item.querySelector('h1 span#productTitle').textContent,
      price: item.querySelector('span .a-price-whole').textContent,
      image: item.querySelector('img#landingImage').src
    };
  });

  if (browser) {
    await browser.close();
  }
  return product;
}

scrapeProduct('https://www.amazon.com.br/PlayStation%C2%AE5-God-of-War-Ragnar%C3%B6k/dp/B0BLW5C5KN/ref=sr_1_2?keywords=ps5&sr=8-2&ufe=app_do%3Aamzn1.fos.25548f35-0de7-44b3-b28e-0f56f3f96147')
  .then(product => console.log(product))
  .catch(error => console.error(error));