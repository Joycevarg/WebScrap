const rp = require('request-promise');
const $ = require('cheerio');
var url = 'https://www.cardekho.com/cars/'
url=url+process.argv[2];
rp(url)
  .then(function(html){
    //success!
    $('h3 > a',html).each(function(i,e){
        console.log($(this).text());
    });
    })
    
    .catch(function(err) {
      //handle error
      console.log(err);
    });