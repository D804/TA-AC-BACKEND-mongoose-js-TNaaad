const express = require('express');
let mongoose = require('mongoose');
let mongoDB = 'mongodb://localhost/netpay';
let app = express();
mongoose.connect(mongoDB, (err) => {
  if (err) {
    console.log('mongodb is not connected');
  } else {
    console.log('mongodb is not connected');
  }
});
app.listen(3000, () => {
  console.log('Running on port 3k');
});
