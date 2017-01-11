const fs = require(`fs`);
const path = require(`path`);
console.log(__dirname);

// Success with node index.js
fs.readFile(path.join(__dirname, `path/to/myFile.txt`), (err, data) => {
  if (err) {
    console.log('dirname : failed !', err);
  } else {
    console.log(data);
  }
});

// Success with node index.js
fs.readFile(`./path/to/myFile.txt`, (err, data) => {
  if (err) {
    console.log('relative : failed !', err.code);
  } else {
    console.log(data);
  }
});
