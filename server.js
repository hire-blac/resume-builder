const express = require('express');

// create express app
const app = express()

app.listen(4000);
console.log('server listening on port 4000');

// register view engine
app.set('view engine', 'ejs')

// routes
app.get('', (req, res) => {
  res.render('index')
})