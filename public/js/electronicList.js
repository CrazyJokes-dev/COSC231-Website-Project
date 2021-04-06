// Web scraping for our items 
// web scraping is where we look through a website(html file in our case) and look for headlines

// This is useful to us because we can then print a list of electronics

let axios = require('axios');
let cheerio = require('cheerio');
let fs = require('fs');

axios.get('https://www.ebay.com/sch/i.html?_from=R40&_trksid=p2334524.m570.l1313&_nkw=electronic&_sacat=0&LH_TitleDesc=0&_osacat=0&_odkw=electronics')
	.then((response) => {
		if(response.status === 200) {
			const html = response.data;
			const $ = cheerio.load(html);
			let itemList = [];
			$('.s-item__info').each(function(i, elem) {
				itemList[i] = {
					title: $(this).find('h3.s-item__title--has-tags').text().trim(),
					url: $(this).children('.s-item__link').attr('href'),
					img: $('.s-item__image-wrapper').children('.s-item__image-img').attr('src')
					//tags: $(this).find('.tags').text().split('#')
					//	.map(tag =>tag.trim())
					//	.filter(function(n){ return n != ""})
				}	
			});
			//const itemListTrimmed = itemList.filter(n => n != undefined )
			fs.writeFile('item-data/techList.json',
						  JSON.stringify(itemList, null, 4),
						  (err)=> console.log('File successfully written!'))
		}			  
	}, (error) => console.log(err) );