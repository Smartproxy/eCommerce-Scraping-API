const response = await fetch(
    'https://scrape.smartproxy.com/v1/tasks', {
        method: 'POST',
        body: {
            target: 'wayfair',
            parse: false,
            url: 'https://www.wayfair.com/rugs/pdp/highland-dunes-gunnell-30-x-18-non-slip-outdoor-door-mat-w005481595.html'
        },
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Basic AUTH'
        },
    }
).catch(error => console.log(error));

console.log(response)