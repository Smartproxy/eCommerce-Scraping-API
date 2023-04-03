const response = await fetch(
    'https://scrape.smartproxy.com/v1/tasks', {
        method: 'POST',
        body: {
            target: 'amazon_product',
            parse: true,
            query: 'B09H74FXNW'
        },
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Basic AUTH'
        },
    }
).catch(error => console.log(error));

console.log(response)

