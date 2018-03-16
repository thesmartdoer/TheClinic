const express = require('express');
const path = require('path');
var bodyParser = require('body-parser');
const PORT = process.env.PORT || 5000;

express()
  .use(express.static(path.join(__dirname, 'public')))
  .use(bodyParser.json())
  .get('/', (req, res) => res.render('index.html'))
  .use('/api', require('./server/routes/app.route'))
  .listen(PORT, () => console.log(`Listening on ${ PORT }`));
