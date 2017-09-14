const mongoose = require('mongoose');
const Schema   = mongoose.Schema;
const User = mongoose.model('User', UserSchema);

const PostSchema = Schema({
  content: String,
  creatorId: users._Id,
  pic_path: String,
  pic_name: String
});

const Post = mongoose.model('Post', PostSchema);

module.exports = Post;
