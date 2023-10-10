const response = await fetch(
    'https://scraper-api.smartproxy.com/v2/scrape', {
        method: 'POST',
        body: {
            target: 'amazon_bestsellers',
            parse: true,
            query: '2407760011',
            domain: 'com',
            locale: 'en_us',
            device_type: 'desktop'
        },
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Basic AUTH'
        },
    }
).catch(error => console.log(error));

console.log(response)
