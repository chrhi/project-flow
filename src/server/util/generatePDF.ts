import puppeteer  from 'puppeteer'
import hb  from 'handlebars'




export const generatePdf  = async (pdfFileAsString : string ) =>{
const data = {};
const template = hb?.compile(pdfFileAsString , { strict: true });
// we have compile our code with handlebars
const result = template(data);
// We can use this to add dynamic data to our  template at run time from database or API as per need. you can read the official doc to learn more https://handlebarsjs.com/
const html = result;
// we are using headless mode
// puppeteer.connect({ browserWSEndpoint: 'wss://chrome.browserless.io?token=YOUR-API-TOKEN' })
const browser = await puppeteer.connect({ browserWSEndpoint: 'wss://chrome.browserless.io?token=c8dc96e8-a6c8-4b7c-97e3-5e7977f7389f' })
const page = await browser.newPage()
// We set the page content as the generated html by handlebars
await page.setContent(html)
// We use pdf function to generate the pdf in the same folder as this file.
const buffer =  (await page.pdf()).buffer
await browser.close();

return buffer

}