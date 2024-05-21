const mongoose = require('mongoose');
let Schema = mongoose.Schema;
let blogSchema = new Schema(
  {
    articles: {
      title: { type: String },
      description: { type: String },
      tags: { type: String },
      likes: { type: Number },
      author: { type: String },
      comments: [String],
    },
    comments: {
      content: { type: String },
      author: { type: String },
      article: { type: String },
    },

    user: {
      name: { type: String },
      email: { type: String },
      age: { type: Number },
    },
  },
  { timestamps: true }
);
let blog = mongoose.model('Blog', blogSchema);
module.exports(blog);
