const mongoose = require('mongoose');
const Schema   = mongoose.Schema;
// const User = mongoose.model('User', UserSchema);

const PostSchema = Schema({
  content: String,
  creatorId: {type: Schema.Types.ObjectId, ref: 'User', required: true },
  pic_path: String,
  pic_name: String
});

PostSchema.methods.belongsTo = function(user){
  return this.creator.equals(user._id);
}

const Post = mongoose.model('Post', PostSchema);

module.exports = Post;
