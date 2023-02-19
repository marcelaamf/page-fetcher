// You need to make an http request and wait for the response.
// After the http request is complete, you need to take the 
//data you receive and write it to a file in your local filesystem.It should take two command line arguments:
//take 2 command line arguments: a URL, a local file path
const args = process.argv.splice(2);
const request = require('request');
const fs = require('fs');

request(args[0], (error, response, body) => {
  if (!error) {
    fs.access(args[1], err => {
      if (err) {
        fs.writeFile(args[1], body, error2 => {
          if (error2) {
            console.log("Error: ", error2);
            return;
          }
          console.log(`Downloaded and saved ${body.length} bytes to ${args[1]}`);
        });             
      } else { 
        console.log(`File already exists`);
        process.exit();
      }
    });
  } else { 
    console.log ("Error: ", error);
    process.exit();
  }
});

 