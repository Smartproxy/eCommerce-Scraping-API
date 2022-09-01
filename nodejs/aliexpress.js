const sdk = require('api')('@smartproxy/v1.0#25e7913l1ow524w');

sdk.auth('SPusername', 'SPpassword');
sdk.realTimeExample({
  target: 'aliexpress',
  parse: false,
  url: 'https://www.aliexpress.com/wholesale?&SearchText=louis+v'
})
  .then(res => console.log(res))
  .catch(err => console.error(err));