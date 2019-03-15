import mongoose from 'mongoose';

const Schama = mongoose.Schema;

const commentSchama = new Schama({
  id: Number,
  comments: Array
})

const Comment = mongoose.model('comment', commentSchama);

export default Comment;