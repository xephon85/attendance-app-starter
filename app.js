// dependencies from npm
const express = require('express');
const bodyParser = require('body-parser');

// requiring path module
const path = require('path');

// route
const names = require('./routes/names');

// initialize our app
const app = express();

// set our view directory
app.set('views', path.join(__dirname, 'views'));
app.set('view engine','ejs');

//add our middleware
app.use(bodyParser.urlencoded({ extended:false }));

// set our routes
app.use('/names', names);
app.use('/*', function(req, res, next) {
  res.redirect('/names');
});

// set up our server
const port = 3001;
app.listen(port, () => console.log(`Server listening on: ${port}`));
