import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const commentSchema = new Schema({
  labels: Array,
  comments: Array
},{
  versionKey: false,
})

const Comment = mongoose.model('comment', commentSchema);

export default Comment;