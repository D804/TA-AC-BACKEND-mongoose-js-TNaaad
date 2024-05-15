let mongoose = require('mongoose');
let Schema = mongoose.Schema;
let userSchema = new Schema({
  name: { type: String, required: true },
  age: { type: Number },
  password: { type: Number, minlength: 5, maxlength: 15 },
  createdAt: { type: Date, default: 05 / 15 / 2024 },
});
