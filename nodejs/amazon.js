const response = await fetch(
    'https://scrape.smartproxy.com/v1/tasks', {
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

