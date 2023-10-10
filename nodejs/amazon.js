const response = await fetch(
    'https://scraper-api.smartproxy.com/v2/scrape', {
        method: 'POST',
        body: {
            target: 'amazon',
            parse: true,
            url: 'https://www.amazon.com/dp/B09H74FXNW'
        },
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Basic AUTH'
        },
    }
).catch(error => console.log(error));

console.log(response)

