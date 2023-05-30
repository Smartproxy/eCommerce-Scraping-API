const response = await fetch(
    'https://scrape.smartproxy.com/v1/tasks', {
        method: 'POST',
        body: {
            target: 'ecommerce',
            url: 'https://www.walmart.com/ip/Marketside-Pepperoni-Pizza-Traditional-Crust-Extra-Large-44-6-oz-Fresh/579824441?athbdg=L1600&from=searchResults',
            device_type: 'desktop',
            parser_type: 'ecommerce_product',
            geo: 'United States',
            headless: 'html',
            locale: 'en_us',
            parse: 'true'
        },
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Basic AUTH'
        },
    }
).catch(error => console.log(error));

console.log(response)