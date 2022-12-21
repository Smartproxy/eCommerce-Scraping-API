const request = require('request');

const username = 'YOUR_USERNAME';
const password = 'YOUR_PASSWORD';

const options = {
  method: 'POST',
  url: 'https://scrape.smartproxy.com/v1/tasks',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': 'Basic ' + Buffer.from(username + ':' + password).toString('base64')
  },
  body: JSON.stringify({
    target: 'idealo_search',
    parse: false,
    query: 'playstation 5'
  })
};

request(options, function (error, response, body) {
  if (error) throw new Error(error);

  console.log(body);
});
