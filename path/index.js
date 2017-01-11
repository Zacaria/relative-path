const fs = require(`fs`);
const path = require(`path`);

console.log('Running from root directory : node path/index.js. ', __dirname);

// Fails with node path/index.js
fs.readFile(path.join(__dirname, `to/myFile.txt`), (err, data) => {
  if (err) {
    console.log('dirname : failed ', err.code);
  } else {
    console.log('dirname : success ' + data);
  }
});

// Success with node path/index.js
fs.readFile(`./to/myFile.txt`, (err, data) => {
  if (err) {
    console.log('relative : failed ', err.code);
  } else {
    console.log('relative : success ' + data);
  }
});
