const express = require('express');
let mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/netpay', (err) => {
  console.log(err ? err : 'ok');
});
// intantiate express

let app = express();
app.listen(3000, () => {
  console.log('Running on port 3k');
});
