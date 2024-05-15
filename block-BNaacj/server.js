const express = require('express');
let mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/netpay', (err) => {
  console.log(err ? err : 'ok');
});
let app = express();
app.get('/', (req, res) => {
  res.send('Welcome');
});
app.listen(3000, () => {
  console.log('Running on port 3k');
});
