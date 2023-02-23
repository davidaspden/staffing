
function parseCSV(csvFilePath) {
  const fs = require('fs');
  const csv = require('csv-parser');
  const results = [];
  return new Promise((resolve, reject) => {
                    fs.createReadStream(csvFilePath).pipe(csv())
                                .on('data', (data) => results.push(data))
                                .on('end', () => resolve(results))
                                .on('error', (err) => reject(err));
                                              });
}

parseCSV('data.csv')
  .then((data) => console.log(data))
    .catch((err) => console.error(err));
    