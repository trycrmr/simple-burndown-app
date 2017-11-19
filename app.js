let express = require('express')
let app = express()

app.get('/', (req, res) => {
  var ejs = require('ejs'),
    people = ['geddy', 'neil', 'alex'],
    html = ejs.render('<%= people.join(", "); %>', {people: people});
  res.send(html)
})

app.listen(3000, () => console.log('Simple Burndown App listening on port 3000!'))