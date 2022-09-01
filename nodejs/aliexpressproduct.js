const sdk = require('api')('@smartproxy/v1.0#25e7913l1ow524w');

sdk.auth('SPusername', 'SPpassword');
sdk.realTimeExample({target: 'aliexpress_product', query: '1005002803336439', parse: false})
  .then(res => console.log(res))
  .catch(err => console.error(err));