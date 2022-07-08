const puppeteer = require('puppeteer');

(async ()=>{
    //Nuestro codigo
    console.log('Lanzamos navegador!');
    const browser = await puppeteer.launch();
    console.log('Cerramos navegador');
    browser.close();
    console.log('Navegador cerrador');
})();