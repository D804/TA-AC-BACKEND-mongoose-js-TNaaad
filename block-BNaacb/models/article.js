let mongoose = require('mongoose');
let Schema = mongoose.Schema;
let userSchema = new Schema({
  article: String,
  author: String,
});
