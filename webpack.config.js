const path = require('path');

module.exports = {
  entry: './public/js/client.js',
  output: {
    path: path.resolve(__dirname, 'public/dist'),
    filename: 'bundle.js'
  }
};