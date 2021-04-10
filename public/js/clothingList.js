// Web scraping for our items 
// web scraping is where we look through a website(html file in our case) and look for headlines

// This is useful to us because we can then print a list of electronics

let axios = require('axios');
let cheerio = require('cheerio');
let fs = require('fs');

axios.get('https://www.amazon.com/s?k=shirts&ref=nb_sb_noss_1')
	.then((response) => {
		if(response.status === 200) {
			const html = response.data;
			const $ = cheerio.load(html);
			let itemList = [];
			$('.sg-col-4-of-12').each(function(i, elem) {
				itemList[i] = {
					title: $(this).find('span.a-text-normal').text().trim(),
					url: $('.a-spacing-top-small').children('h2.a-spacing-none').children('.a-link-normal').attr('href'),
					img: $('.a-spacing-medium').children('.a-section').children('.s-image-overlay-white-semitransparent').children('.rush-component').children('.a-link-normal').children('.a-section').children('.s-image').attr('src')
					//tags: $(this).find('.tags').text().split('#')
					//	.map(tag =>tag.trim())
					//	.filter(function(n){ return n != ""})
				}	
			});
			//const itemListTrimmed = itemList.filter(n => n != undefined )
			fs.writeFile('item-data/clothingList.json',
						  JSON.stringify(itemList, null, 4),
						  (err)=> console.log('File successfully written!'))
		}			  
	}, (error) => console.log(err) );