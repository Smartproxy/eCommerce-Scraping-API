const sdk = require('api')('@smartproxy/v1.0#25e7913l1ow524w');

sdk.auth('SPusername', 'SPpassword');
sdk.realTimeExample({target: 'amazon_pricing', query: 'B09H74FXNW', parse: true})
  .then(res => console.log(res))
  .catch(err => console.error(err));