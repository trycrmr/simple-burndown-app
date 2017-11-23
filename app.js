let express = require('express')
let app = express()
let path = require('path');
let ejs = require('ejs');

let viewPath = path.join(__dirname, '/views');
// app.set('views', viewPath);
app.set('view engine', 'ejs')

app.use(express.static(path.join(__dirname, '/public')));

app.get('/', (req, res) => {
  res.render('home', {foo: 'foo'});
})

app.listen(3000, () => console.log('Simple Burndown App listening on port 3000!'))