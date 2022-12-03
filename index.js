const puppeteer = require('puppeteer');

async function run() {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto("https://www.simplyrecipes.com/dinner-recipes-5091433");

//   await page.screenshot({ path: 'example.png', fullPage: true });
//   await page.pdf({ path: 'example.pdf', format: 'A4' });

//   const html = await page.content();
//   console.log(html)

  await browser.close();
}

run();
