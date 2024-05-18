let mongoose = require('mongoose');
let userSchema = new mongoose.Schema({
  name: String,
  age: { type: Number },
  date: { type: Date, default: Date.now },
});
let userModel = mongoose.model(User, userSchema);
model.exports = userModel;
let article = new mongoose.Schema({
  title: { type: String },
  description: { type: String },
});
let articleModel = mongoose.model(Article, article);
module.exports(articleModel);
