const sdk = require('api')('@smartproxy/v1.0#25e7913l1ow524w');

sdk.auth('SPusername', 'SPpassword');
sdk.realTimeExample({
  target: 'wayfair',
  parse: false,
  url: 'https://www.wayfair.com/rugs/pdp/highland-dunes-gunnell-30-x-18-non-slip-outdoor-door-mat-w005481595.html'
})
  .then(res => console.log(res))
  .catch(err => console.error(err));