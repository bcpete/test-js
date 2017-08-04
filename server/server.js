const express = require('express');

var app = express();

app.get('/', (req, res) => {
  res.send({
    error: 'Page not found',
    name: 'App v1.0'
  });
});

app.get('/users', (req, res) => {
  res.send([{
      name: 'Brady',
      age: 23
    },{
      name: 'Matt',
      age: 22
    },{
      name: 'Another name',
      age: 60
    }]);
});
app.listen(3000);

module.exports.app = app;