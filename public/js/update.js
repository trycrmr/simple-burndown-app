let $ = require('jquery');

let update = (rowData) => {
  return new Promise((resolve, reject) => {
    try {
      console.log('rowData', rowData);
      $.ajax({
        url: '/api/update',
        method: 'POST',
        data: rowData
      })
      .done(results => {
        console.log('SUCCESS!!');
        resolve(results);
      })
      .fail(err => {
        console.log('FAILURE!!');
        reject(err);
      })

    } catch(err) {
      reject(err);
    }
  })
}

module.exports = update;