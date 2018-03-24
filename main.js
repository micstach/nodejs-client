var request = require("request");

var options = {
    url: 'https://developer.api.autodesk.com/agd/v1/version'
};

if (process.env.PROXY_SERVER) {
    options.proxy = process.env.PROXY_SERVER;
}

request(options, function (error, response, body) {
  console.log('error:', error); 
  console.log('statusCode:', response && response.statusCode); 
  console.log('body:', body); 
});

