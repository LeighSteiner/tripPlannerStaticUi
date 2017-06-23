const express = require('express');
const app = express();
const db = require('./models/db');
const volleyball = require('volleyball');
const bodyParser = require('body-parser');
const nunjucks = require('nunjucks');
const router = require('./routes');
const path = require('path');


app.use(volleyball);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(__dirname + '/public'));
app.use('/bootstrap', express.static(path.join(__dirname, 'node_modules/bootstrap/dist')))
app.use('/jquery', express.static(path.join(__dirname, 'node_modules/jquery/dist')));

app.set('view engine', 'html');
app.engine('html', nunjucks.render);
nunjucks.configure('views', { noCache: true });



app.use(router);

app.get('/', function(req, res, next) {
  res.render('index');
});

// add routes here



app.use(function(req, res, next) {
  const err = new Error('That page doesn\'t exist!');
  err.status = 404;
  next(err);
});

app.use(function(err, req, res, next) {
  err.status = err.status || 500;
  console.log(err);
  res.status(err.status).render('error', { err: err });
});

db.sync()
.then(function() {
  console.log('db is synced')
  app.listen(1337, function() {
    console.log("Server is listening on port 1337");
  });
});
