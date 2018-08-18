const fs = require('fs');

const writeOut = filename => data => {
  const dataStringified = JSON.stringify(data, null, 2);

  fs.writeFile(filename, dataStringified, err => {
    if (err) throw err;
    console.log('The file has been saved!');
  });
};

module.exports = writeOut;
