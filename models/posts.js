var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var PostSchema = new Schema({
  word: String,
  definition: String
});

var Post = mongoose.model('Post', PostSchema);

module.exports = Post;