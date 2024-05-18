const express = require('express');
let mongoose = require('mongoose');
let mongodb = 'mongodb://localhost/netpay';
let app = express();
mongoose.connect(mongodb, (err) => {
  if (err) {
    console.log('Mongodb is not connected');
  } else {
    console.log('Mongodb is connected');
  }
});
app.listen(3000, () => {
  console.log('Running on port 3k');
});
