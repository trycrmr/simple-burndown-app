let db = require('./config/db')

db.query('select * from persons')
.then(result => {
  console.log('result', result)  
})
.catch(err => {
  console.log('err', err)
});