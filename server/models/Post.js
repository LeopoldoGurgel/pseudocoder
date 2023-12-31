const { Schema, model } = require('mongoose');
const dateFormat = require('../utils/dateFormat')

const postSchema = new Schema({
  title: {
    type: String,
    required: true,
    
  },
  content: {
    type: String,
    required: true,
    trim: true, 
    minlength: 1
  },
  comments: [
    {
      type: Schema.Types.ObjectId,
      ref: "Comment"
    },
  ],
  author:
    {
        type: Schema.Types.ObjectId,
        ref: "User"
    },
  createdAt: {
    type: Date,
    default: Date.now,
    get: (timestamp) => dateFormat(timestamp),
  },
});

const Post = model('Post', postSchema);

module.exports = Post;