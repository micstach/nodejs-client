var request = require("request");

var options = {
    url: 'https://developer.api.autodesk.com/agd/v1/version'
};

if (process.env.PROXY_SERVER) {
    options.proxy = process.env.PROXY_SERVER;
}

request(options, function (error, response, body) {
  console.log('error:', error); // Print the error if one occurred
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  console.log('body:', body); // Print the HTML for the Google homepage.
});

