let mongoose = require('mongoose');
let articleSchema = new mongoose.Schema({
  title: { type: String, require: true },
  description: { type: String },
  tags: [String],
  createdAt: { type: Date, default: Date.now },
  likes: { type: Number, default: 0 },
});
let userSchema = new mongoose.Schema({
  name: { type: String, require: true },
  email: { type: Email, lowercase: true },
  age: { type: Number, default: 0 },
  password: { type: Password, minlength: 5 },
  createdAt: { type: Date, default: Date.now },
  favourites: [String],
  timestamps: { type: Date },
});
let addressSchema = new mongoose.Schema({
  village: { type: String, require: true },
  city: { type: String, required: true },
  state: { type: String, required: true },
  pin: { type: String, required: true },
  user: user.object,
  timestamps: { type: Date },
});
let modelUser = mongoose.model('User', userSchema);
let modelArticle = mongoose.model('Article', articleSchema);
let modelAddress = mongoose.model('Address', addressSchema);
module.exports(modelUser);
module.exports(modelArticle);
module.exports(modelAddress);
