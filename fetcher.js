const argumentList = process.argv;
const parameters = argumentList.slice(2);

const request = require('request');

const fs = require('fs');

parameterArray = [];

for(let parameter of parameters) {
  parameterArray.push(parameter);
}

request(parameterArray[0], (error, response, body) => {
  console.log('error:', error); // Print the error if one occurred
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  fs.writeFileSync(parameterArray[1], body);
})
