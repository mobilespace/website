const express = require('express');
const logger = require('morgan');
var minify = require('express-minify');
var ua = require('universal-analytics');

const path = require('path');

const port = (process.env.PORT || 3000)
const url = port === 3000 ? 'http://localhost:3000' : 'https://mobilespace.herokuapp.com'

// set up the express app
const app = express();

// log requests to the console.
app.use(logger('dev'));

// minify HTML
app.use(minify());

// tell the Express app to look for static files in these directories
app.use(express.static('./server/static/'));

var visitor = ua('UA-117501301-2');

visitor.pageview("/", "https://mobilespace.herokuapp.com/", "Welcome", function (err) {
  console.log('Page visited.')
});

visitor.event("Visitor", "Landing Page", "Meaning of life..", 42, function (err) {
  console.log('Landing Page visited.')
})

// Handle 404's - Not Found
app.use(function (req, res, next) {
  res.sendFile(path.join(__dirname + '/server/static/index.html'));
})

// start the server
app.listen(port, () => {
  console.log('Server is running @ ' + url);
});
