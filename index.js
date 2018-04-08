const express = require('express');
const logger = require('morgan');
const path = require('path');

const port = (process.env.PORT || 3000)
const url = port === 3000 ? 'http://localhost:3000' : 'https://mobilespace.herokuapp.com'

// set up the express app
const app = express();

// log requests to the console.
app.use(logger('dev'));

// tell the Express app to look for static files in these directories
app.use(express.static('./server/static/'));

// Handle 404's - Not Found
app.use(function (req, res, next) {
  res.sendFile(path.join(__dirname + '/server/static/index.html'));
})

// start the server
app.listen(port, () => {
  console.log('Server is running @ ' + url);
});
