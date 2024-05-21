const express = require('express');
const mongoose = require('mongoose');
let Blog = require('./models/blog.js');
// connect to mongodb
mongoose.connect('mongodb://localhost/netplay', (err) => {
  console.log(err ? err : 'connection Stablished');
});
