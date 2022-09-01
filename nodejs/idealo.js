const sdk = require('api')('@smartproxy/v1.0#25e7913l1ow524w');

sdk.auth('SPusername', 'SPpassword');
sdk.realTimeExample({
  target: 'idealo',
  parse: false,
  url: 'https://www.idealo.co.uk/compare/200584791/sony-playstation-5-ps5-digital-edition.html'
})
  .then(res => console.log(res))
  .catch(err => console.error(err));