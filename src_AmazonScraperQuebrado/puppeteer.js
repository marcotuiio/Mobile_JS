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

scrapeProduct('https://www.amazon.com.br/Cereal-Matinal-Tradicional-Nescau-770g/dp/B081QVY2TD/ref=sxts_rp_s_1_0?content-id=amzn1.sym.086bd8c4-d9e4-415a-8862-4106b70dc76c%3Aamzn1.sym.086bd8c4-d9e4-415a-8862-4106b70dc76c&cv_ct_cx=nescau%2Bcereal&keywords=nescau%2Bcereal&pd_rd_i=B081QVY2TD&pd_rd_r=527ef060-6af7-4699-9984-2112747859dc&pd_rd_w=tImjK&pd_rd_wg=u3jFi&pf_rd_p=086bd8c4-d9e4-415a-8862-4106b70dc76c&pf_rd_r=0F1C2CCVY6WK4WPF2J72&sbo=RZvfv%2F%2FHxDF%2BO5021pAnSA%3D%3D&sr=1-1-f0029781-b79b-4b60-9cb0-eeda4dea34d6&th=1')
  .then(product => console.log(product))
  .catch(error => console.error(error));