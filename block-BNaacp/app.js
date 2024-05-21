const express = require('express');
const mongoose = require('mongoose');
let User = require('./models/users');
// Connect to mongodb
mongoose.connect('mongodb://localhost/netplay', (err) => {
  console.log(err ? err : 'connection stablish');
});
let app = express();
app.use(express.json());
app.post('/users', (req, res) => {
  console.log(req.body);
  User.create(req.body, (err, user) => {
    console.log(err, user);
    res.json(user);
  });
});
app.get('/users', (req, res) => {
  User.find({}, (err, users) => {
    console.log(err, users);
    res.json({ users: users });
  });
});
app.get('/users/:id', (req, res) => {
  let userId = req.params.id;
  User.findById(id, (err, user) => {
    console.log(err);
    res.json(user);
  });
});
app.get('/users', (req, res) => {
  User.find({ id: '' }, (err, user) => {
    console.log(err);
    res.json({ user: user });
  });
});
// find gives the data of all user
// findOne gives only a single user which matches first parameter
// finById gives particular user which id match with userid.
// app.put('/users/:id', (req, res) => {
//   User.update();
// });
app.put('/users/:id', (req, res) => {
  let userParam = req.params.id;
  User.findByIdAndUpdate(id, req.body, { new: true }, (err, updatedProduct) => {
    console.log(err);
    res.json(updatedProduct);
  });
  // User.updateOne(id,req,body,(err,updated)=>{
  // res.json(updated);
  // });
});
app.delete('/users/:id', (req, res) => {
  User.findByIdAndDelete(req.params.id, (err, deletedProduct) => {
    res.json(deletedProduct);
  });
});

app.listen(3000, () => {
  console.log('Running on port 3k');
});
