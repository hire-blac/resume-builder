const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
// create new express app
const app = express();

// /api routes
app.get('/api',(req, res)=>{
  res.json({message: 'Hello from Node Server'})
});

// set port number
const port = process.env.PORT || 3001;

// listen for requests 
app.listen(port, ()=>{
  console.log(`Server listening on port ${port}`)
})


// serve files for react lient app
app.use(express.static(path.resolve(__dirname, './client/build')))
app.use(express.urlencoded({extended: true}));
app.use(express.json())


// other get requests not handled before will return react app
app.get('*', (req,res)=>{
  res.render('index.html')
})

// routes
// app.get('/',(req,res) => {
//   res.render('index')
// })

app.post('/generate',(req, res)=>{
  console.log(req.body.data)
  res.send('Data submitted to server')
})