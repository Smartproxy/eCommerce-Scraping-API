const response = await fetch(
    'https://scrape.smartproxy.com/v1/tasks', {
        method: 'POST',
        body: {
            target: 'wayfair_search',
            parse: false,
            query: 'doormat'
        },
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Basic AUTH'
        },
    }
).catch(error => console.log(error));

console.log(response)