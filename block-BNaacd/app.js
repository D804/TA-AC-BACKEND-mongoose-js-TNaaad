const express = require('express');
const mongoose = require('mongoose');
// mongoose connect
mongoose.connect('mongodb://localhost/netpayShop', (err) => {
  console.log(err ? err : 'ok');
});
let app = express();
app.get('/', (req, res) => {
  res.send('Welcome to my page');
});

app.listen(3000, () => {
  console.log('Running on port 3k');
});
