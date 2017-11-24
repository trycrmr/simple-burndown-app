let express = require('express')
let app = express()
let path = require('path');
let ejs = require('ejs');
let db = require('./config/db')
let async = require('asyncawait/async');
let await = require('asyncawait/await');

let viewPath = path.join(__dirname, '/views');
// app.set('views', viewPath);
app.set('view engine', 'ejs')

app.use(express.static(path.join(__dirname, '/public')));

app.get('/', (req, res) => {
  res.render('home');
})

app.get('/data', async( (req, res) => {
  try {
    let results = await(db.query(
`
SELECT date, persons.name AS person, projects.name AS project, time, type FROM time_entry_fac
INNER JOIN persons ON time_entry_fac.person = persons.id
INNER JOIN projects ON time_entry_fac.project = projects.id
`
    ))
    console.log('results.rows', results.rows);
    res.send(results.rows);
  } catch(err) {
    console.log('Error getting data from db', err);
    res.status(500).json(err)
  }
}))

app.listen(3000, () => console.log('Simple Burndown App listening on port 3000!'))